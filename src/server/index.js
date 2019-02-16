import express from 'express';
import { getUserCount } from 'db/utils';
import packageInfo from '../../package.json';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const userCount = await getUserCount();

    res.json({ version: packageInfo.version, x: userCount });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
