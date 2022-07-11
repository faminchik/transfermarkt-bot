import transfersProcess from 'helpers/parsers/allLatestTransfers/transfersProcess';
import type { TTransferFullEntity } from 'ts/EntitiesTS';

export default async (): Promise<TTransferFullEntity[]> => {
    return transfersProcess();
};
