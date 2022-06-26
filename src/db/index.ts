import mongoose from 'mongoose';
import type { Connection } from 'mongoose';

export const connectDataBase = (uri: string): Promise<Connection> => {
    return mongoose
        .connect(uri)
        .then(() => {
            console.info('Connected to DB:', uri);
            return mongoose.connection;
        })
        .catch((err: Error) => {
            console.error(err);
            throw new Error('Failed to connect to DB');
        });
};
