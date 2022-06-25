import Club from 'models/Club';
import { TClubEntity } from 'ts/types/Entities.types';

export const getClubInfo = async (clubName: TClubEntity['clubName']) => await Club.findOne({ clubName });
