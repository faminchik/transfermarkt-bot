import _ from 'lodash';
import cheerio from 'cheerio';
import { ALL_LATEST_TRANSFERS, CLUBS_SEARCH } from 'constants/transfermarkt/ConvertDataTypes';
import { TEXT, HTML } from 'constants/transfermarkt/TableDataTypes';

// TODO create constants for everything
export default {
    [ALL_LATEST_TRANSFERS]: {
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
            },
            16: {
                key: 'fee'
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
            }
        }
    },
    [CLUBS_SEARCH]: {
        [TEXT]: {
            2: {
                key: 'club',
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
    }
};
