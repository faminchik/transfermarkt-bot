import BPromise from 'bluebird';
import Player from 'models/Player';
import type { TPlayerEntity } from 'ts/EntitiesTS';

export const getPlayerInfo = async (name: TPlayerEntity['name']) => Player.findOne({ name });

export const upsertPlayers = async (players: TPlayerEntity[]) => {
    return BPromise.mapSeries(players, async (player) => {
        const { name, age, clubName, marketValue, nationality, playerLink } = player;

        try {
            const result = await Player.findOneAndUpdate(
                { name },
                { name, age, clubName, marketValue, nationality, playerLink },
                { new: true, upsert: true }
            );

            console.info(result.name);
            return result;
        } catch (err) {
            console.error(err);
            return null;
        }
    });
};
