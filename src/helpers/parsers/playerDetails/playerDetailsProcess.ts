import pt from 'constants/transfermarkt/ParsingTypes';
import ptm from 'constants/transfermarkt/ParsingTableModes';
import parsingProcess from 'helpers/parsingProcess';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import { BASE_URL } from 'constants/Config';
import type { TPlayerTransferEntity } from 'ts/EntitiesTS';

export default async (playerLink: string): Promise<{ transfersHistory: TPlayerTransferEntity[] }> => {
    const url = BASE_URL + playerLink;

    const html = await fetchHtmlRequest(url);
    if (!html) return { transfersHistory: [] };

    return { transfersHistory: parsingProcess(html, pt.PLAYER_TRANSFERS_HISTORY, ptm.DIV) };
};
