import express from 'express';
import { fetchUserCount } from 'db/helpers/users';
import packageInfo from '../../package.json';

const port = process.env.PORT || 5000;

export const runServer = async (): Promise<void> => {
    const app = express();
    app.use(express.json());

    app.get('/', async (req, res) => {
        const userCount = await fetchUserCount();

        res.json({ version: packageInfo.version, x: userCount });
    });

    app.listen(port, () => console.info(`Listening on port ${port}`));
};
