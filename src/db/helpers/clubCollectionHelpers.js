import _ from 'lodash';
import Club from 'models/Club';

export const getClubLink = async clubName => {
    const club = await Club.findOne({ clubName });
    return _.get(club, 'clubLink', '');
};
