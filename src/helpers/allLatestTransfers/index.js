import transfersProcess from 'helpers/allLatestTransfers/transfersProcess';
import * as pt from 'constants/transfermarkt/ParsingTypes';

export default async () => {
    const types = [pt.ALL_LATEST_TRANSFERS];

    return await transfersProcess(types);
};
