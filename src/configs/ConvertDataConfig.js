import _ from 'lodash';
import cheerio from 'cheerio';
import * as cdt from 'constants/transfermarkt/ConvertDataTypes';
import { TEXT, HTML } from 'constants/transfermarkt/TableDataTypes';
import { END_OF_LOAN } from 'constants/transfermarkt';

// TODO create constants for everything
export default {
    [cdt.ALL_LATEST_TRANSFERS]: {
        [TEXT]: {
            2: {
                key: 'name',
                handler: data => {
                    return _.filter(data, (player, index) => index % 2 === 1);
                }
            },
            4: {
                key: 'age',
                handler: data => {
                    return _.slice(data, 1);
                }
            },
            8: {
                key: 'leftTeam'
            },
            12: {
                key: 'joinedTeam'
            },
            14: {
                key: 'transferDate'
            },
            15: {
                key: 'marketValue'
            }
        },
        [HTML]: {
            5: {
                key: 'nationality',
                handler: data => {
                    return _.map(_.slice(data, 1), item => {
                        const $ = cheerio.load(item);
                        return $('img').attr('alt');
                    });
                }
            },
            9: {
                key: 'leftTeamCountry',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        const result = $('img').attr('alt');
                        return result ? result : '';
                    });
                }
            },
            13: {
                key: 'joinedTeamCountry',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        const result = $('img').attr('alt');
                        return result ? result : '';
                    });
                }
            },
            16: {
                key: 'fee',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        return $('a').text();
                    });
                }
            }
        }
    },
    [cdt.CLUBS_SEARCH]: {
        [TEXT]: {
            2: {
                key: 'clubName',
                handler: data => {
                    return _.slice(data, 1);
                }
            },
            6: {
                key: 'totalMarketValue',
                handler: data => {
                    return _.slice(data, 1);
                }
            }
        },
        [HTML]: {
            2: {
                key: 'clubLink',
                handler: data => {
                    return _.map(_.slice(data, 1), item => {
                        const $ = cheerio.load(item);
                        return $('a').attr('href');
                    });
                }
            },
            4: {
                key: 'country',
                handler: data => {
                    return _.map(_.slice(data, 1), item => {
                        const $ = cheerio.load(item);
                        return $('img').attr('alt');
                    });
                }
            }
        }
    },
    [cdt.TEAM_TRANSFERS]: {
        [TEXT]: {
            3: {
                key: 'name',
                handler: data => _.slice(data, 1)
            },
            5: {
                key: 'age',
                handler: data => _.slice(data, 1)
            },
            6: {
                key: 'marketValue',
                handler: data => _.slice(data, 1)
            },
            10: {
                key: 'secondPartyTeam'
            }
        },
        [HTML]: {
            7: {
                key: 'nationality',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        return $('img').attr('alt');
                    });
                }
            },
            11: {
                key: 'secondPartyTeamCountry',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        const result = $('img').attr('alt');
                        return result ? result : '';
                    });
                }
            },
            12: {
                key: 'fee',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        const text = $('a').text();
                        if (_.includes(text, END_OF_LOAN)) {
                            $('a > .normaler-text').remove();
                            return $('a').text();
                        }
                        return text;
                    });
                }
            }
        }
    }
};
