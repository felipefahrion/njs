const axios = require("axios");
const errorHandler = require("./utils/error-handler.js");
const calculateResult = require("./utils/calculate-result.js");

const VERSION = 'v1'
const URL = `https://interview.adpeai.com/api/${VERSION}`

const getTask = async (req, res) => {
    try {
        const response = await axios.get(`${URL}/get-task`);
        const {
            id,
            operation,
            left,
            right } = response.data;

        res.json({id, result: calculateResult(operation, right, left), operation, left, right});
    } catch (error) {
        errorHandler(error)
    }
}

const submitTask = async (req, res) => {
    const { id, result } = req.body;

    if (!id || !result) {
        res.status(400).json({ error: 'id and result are required' });
        return;
    }

    try {
        const response = await axios.post(`${URL}/submit-task`, { id, result });
        res.json(response.data);
    } catch (error) {
        errorHandler(error)
    }
}

module.exports = { getTask, submitTask };