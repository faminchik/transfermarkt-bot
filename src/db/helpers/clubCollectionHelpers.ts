import Club from 'models/Club';
import type { TClubEntity } from 'ts/EntitiesTS';

export const getClubInfo = async (clubName: TClubEntity['clubName']) => Club.findOne({ clubName });
