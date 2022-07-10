import _ from 'lodash';
import cheerio from 'cheerio';
import cdt from 'constants/transfermarkt/ConvertDataTypes';
import tdt from 'constants/transfermarkt/TableDataTypes';
import { END_OF_LOAN } from 'constants/Transfermarkt';
import type { TConvertDataConfig } from 'ts/ConvertDataConfigTS';

const config: TConvertDataConfig = {
    [cdt.ALL_LATEST_TRANSFERS]: {
        [tdt.TEXT]: {
            2: {
                key: 'name',
                handler: data => _.filter(data, (player, index) => index % 2 === 1)
            },
            3: {
                key: 'position',
                handler: data => _.slice(data, 1)
            },
            4: {
                key: 'age',
                handler: data => _.slice(data, 1)
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
        [tdt.HTML]: {
            1: {
                key: 'photoSrc',
                handler: data => {
                    const filtered = _.filter(data, (item, index) => index % 6 === 1);
                    return _.map(filtered, item => {
                        const $ = cheerio.load(item);

                        const imgSrc = $('img').attr('data-src');
                        if (imgSrc?.includes('default.')) return '';

                        return imgSrc?.replace('medium', 'big')?.split('?')[0] ?? '';
                    });
                }
            },
            2: {
                key: 'profileLink',
                handler: data => {
                    const filtered = _.filter(data, (item, index) => index % 2 === 1);
                    return _.map(filtered, item => {
                        const $ = cheerio.load(item);
                        return $('a').attr('href') ?? '';
                    });
                }
            },
            5: {
                key: 'nationality',
                handler: data => {
                    return _.map(_.slice(data, 1), item => {
                        const $ = cheerio.load(item);
                        return $('img').attr('alt') ?? '';
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
        [tdt.TEXT]: {
            2: {
                key: 'clubName',
                handler: data => _.slice(data, 1)
            },
            6: {
                key: 'totalMarketValue',
                handler: data => _.slice(data, 1)
            }
        },
        [tdt.HTML]: {
            2: {
                key: 'clubLink',
                handler: data => {
                    return _.map(_.slice(data, 1), item => {
                        const $ = cheerio.load(item);
                        return $('a').attr('href') ?? '';
                    });
                }
            },
            4: {
                key: 'country',
                handler: data => {
                    return _.map(_.slice(data, 1), item => {
                        const $ = cheerio.load(item);
                        return $('img').attr('alt') ?? '';
                    });
                }
            }
        }
    },
    [cdt.TEAM_TRANSFERS]: {
        [tdt.TEXT]: {
            3: {
                key: 'name',
                handler: data => _.slice(data, 1)
            },
            4: {
                key: 'position',
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
        [tdt.HTML]: {
            7: {
                key: 'nationality',
                handler: data => {
                    return _.map(data, item => {
                        const $ = cheerio.load(item);
                        return $('img').attr('alt') ?? '';
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

export default config;
