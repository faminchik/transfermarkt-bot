require('dotenv').config();
import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
    throw new Error('Seems like you forgot to pass Mongo Uri. I can not proceed...');
}

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err, 'Failed to connect to DB'));
