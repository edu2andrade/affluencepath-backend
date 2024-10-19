import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || '8080';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
