import * as tsMongoose from 'ts-mongoose';

declare module 'ts-mongoose' {
    export type ExtractShortProps<T extends tsMongoose.Definition> = Omit<tsMongoose.ExtractProps<T>, '_id' | '__v'>;
}
