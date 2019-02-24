const { Router } = require('express');

const router = new Router();
const TaskController = require('./../controllers/task.js');

router.get('/', TaskController.getTasks);
router.post('/', TaskController.newTask);

module.exports = router;
