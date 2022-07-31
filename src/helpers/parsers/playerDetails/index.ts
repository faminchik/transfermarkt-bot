import playerDetailsProcess from 'helpers/parsers/playerDetails/playerDetailsProcess';
import type { TPlayerTransferEntity } from 'ts/EntitiesTS';

export default async (playerLink: string): Promise<{ transfersHistory: TPlayerTransferEntity[] }> => {
    const { transfersHistory } = await playerDetailsProcess(playerLink);

    return { transfersHistory };
};
