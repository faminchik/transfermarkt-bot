import _ from 'lodash';
import searchPlayersProcess from 'helpers/parsers/searchPlayers/searchPlayersProcess';
import type { TPlayerEntity } from 'ts/EntitiesTS';

export default async (query: string): Promise<{ players: TPlayerEntity[] }> => {
    const searchPlayersResult = await searchPlayersProcess(query);

    const players = _.take(searchPlayersResult, 5);

    return { players };
};
