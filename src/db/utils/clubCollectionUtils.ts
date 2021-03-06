import BPromise from 'bluebird';
import Club from 'models/Club';
import { TClubEntity } from 'ts/types/Entities.types';

export const insertClubs = async (clubs: TClubEntity[]) => {
    await BPromise.each(clubs, async club => {
        const { clubName, clubLink, country, totalMarketValue } = club;

        await Club.findOne({ clubName }).then(club => {
            if (club) return;

            const newClub = new Club({
                clubName,
                clubLink,
                country,
                totalMarketValue
            });

            newClub
                .save()
                .then(club => console.log(club.clubName))
                .catch(err => console.log(err));
        });
    });
};
