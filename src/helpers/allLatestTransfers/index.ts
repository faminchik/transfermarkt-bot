import transfersProcess from 'helpers/allLatestTransfers/transfersProcess';
import type { TTransferFullEntity } from 'ts/EntitiesTS';

export default async (): Promise<TTransferFullEntity[]> => {
    return await transfersProcess();
};
