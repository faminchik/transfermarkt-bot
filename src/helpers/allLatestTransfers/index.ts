import transfersProcess from 'helpers/allLatestTransfers/transfersProcess';
import { TTransferFullEntity } from 'ts/types/Entities.types';

export default async (): Promise<TTransferFullEntity[]> => {
    return await transfersProcess();
};
