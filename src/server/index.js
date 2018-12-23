import express from 'express';
import packageInfo from '../../package.json';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ version: packageInfo.version });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
