import BPromise from 'bluebird';
import Club from 'models/Club';
import type { TClubModel } from 'ts/ModelsTS';
import type { TClubEntity } from 'ts/EntitiesTS';

export const fetchClubInfo = async (clubName: TClubEntity['clubName']): Promise<TClubModel | null> => {
    return Club.findOne({ clubName });
};

export const upsertClubs = async (clubs: TClubEntity[]): Promise<(TClubModel | null)[]> => {
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
