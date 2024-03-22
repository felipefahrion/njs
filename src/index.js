const app = require("./server");
const { getTask, submitTask } = require("./services.js");
const { Routes } = require("./utils/routes.js");

app.get(Routes.GET_TASK, async (req, res) => getTask(req, res));
app.post(Routes.SUBMIT_TASK, async (req, res) => submitTask(req, res));
