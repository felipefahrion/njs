const express = require("express");
const { getTask, submitTask } = require("./controller.js");
const { Routes } = require("./utils/routes.js");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get(Routes.GET_TASK, async (req, res) => getTask(req, res));
app.post(Routes.SUBMIT_TASK, async (req, res) => submitTask(req, res));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
