import express from "express";
import axios from "axios"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/task', async (req, res) => {

    const VERSION = 'v1'
    const URL = `https://interview.adpeai.com/api/${VERSION}`


    try {
        const response = await axios.get(`${URL}/get-task`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao chamar a API externa:', error);
        res.status(500).json({ error: 'Erro ao chamar a API externa' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});