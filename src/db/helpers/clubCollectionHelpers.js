import _ from 'lodash';
import Club from 'models/Club';

export const getClubInfo = async clubName => await Club.findOne({ clubName });
