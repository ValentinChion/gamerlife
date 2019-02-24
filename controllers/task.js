const TaskData = require('../schemas/task');

const TaskController = {
    async getTasks(req, res) {
        const tasks = await TaskData.find({});
        return res.status(200).json(tasks);
    },

    async newTask(req, res, next) {
        if (req.body) {
            try {
                const result = await TaskData.create(req.body);
                return res.status(200).json(result);
            } catch (error) {
                return next(error);
            }
        } return res.status(400).send('Bad Request...');
    },
};

module.exports = TaskController;
