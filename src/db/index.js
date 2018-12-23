require('dotenv').load();
import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
    console.error('Seems like you forgot to pass Mongo Uri. I can not proceed...');
    process.exit(1);
}

mongoose
    .connect(
        MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err, 'Failed to connect to DB'));
