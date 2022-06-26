require('dotenv').config();

const { TELEGRAM_BOT_TOKEN, MONGO_URI } = process.env;

if (!TELEGRAM_BOT_TOKEN || !MONGO_URI) {
    throw new Error(`Seems like you forgot to pass env variables. I can't proceed...`);
}

export default {
    TELEGRAM_BOT_TOKEN,
    MONGO_URI
};
