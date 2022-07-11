import BPromise from 'bluebird';
import Club from 'models/Club';
import type { TClubEntity } from 'ts/EntitiesTS';

export const getClubInfo = async (clubName: TClubEntity['clubName']) => Club.findOne({ clubName });

export const upsertClubs = async (clubs: TClubEntity[]) => {
    return BPromise.mapSeries(clubs, async (club) => {
        const { clubName, clubLink, country } = club;

        try {
            const result = await Club.findOneAndUpdate(
                { clubName },
                { clubName, clubLink, country },
                { new: true, upsert: true }
            );

            console.info(result.clubName);
            return result;
        } catch (err) {
            console.error(err);
            return null;
        }
    });
};
