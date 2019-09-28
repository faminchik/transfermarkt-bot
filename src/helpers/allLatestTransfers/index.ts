import transfersProcess from 'helpers/allLatestTransfers/transfersProcess';
import pt from 'constants/transfermarkt/ParsingTypes';

export default async () => {
    const types = [pt.ALL_LATEST_TRANSFERS] as const;

    return await transfersProcess(types);
};
