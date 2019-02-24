const PlayerData = require('../schemas/player');
const TaskData = require('../schemas/task');
const async = require('async');
const util = require('../services/util');

const PlayerController = {
    async getPlayer(req, res) {
        const player = await PlayerData.findById(req.body.id);
        return res.status(200).json(player);
    },

    async getPlayerTasks(req,res) {
        let player = await PlayerData.findById(req.params.playerId).populate({
            path: 'tasks'
        });
        player = player.toJSON();
        player.nextLevelXp = await util.getNextLevel(player.level);
        player.nextLevelXp = player.nextLevelXp.xpNextLevel;
        return res.status(200).json(player);
    },

    async newTaskOfPlayer(req,res) {
        const player = await PlayerData.findById(req.params.playerId);
        const taskToSave = new TaskData(req.body);
        const task = await taskToSave.save();
        player.tasks.push(task._id);
        await player.save();
        res.status(200).json(player);
    },

    async newPlayer(req, res, next) {
        if (req.body) {
            try {
                const result = await PlayerData.create(req.body);
                return res.status(200).json(result);
            } catch (error) {
                return next(error);
            }
        } return res.status(400).send('Bad Request...');
    },

    async updatePlayerLevel(req,res) {
        if(req.body) {
            const id = req.body.id;
            let player = await PlayerData.findById(id);
            player = player.toJSON();
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let xpToAdd = await player.xp + req.body.tasks.reduce(reducer);
            let newStats = await util.getNextLevel(player.level,xpToAdd);
            player.level = newStats.level;
            player.xp = newStats.xp;
            player = new PlayerData(player);
            let result = await PlayerData.replaceOne({_id:player.id}, player);
            if(result.ok) {
                player = player.toJSON();
                player.nextLevelXp = newStats.xpNextLevel;
            }
            return res.status(200).json(player);
        } else return res .status(400).send("Bad Request...");
    },

    async  resetStats(req,res) {
        if(req.params.playerId) {
            const id = req.params.playerId;
            let player = await PlayerData.findById(id);
            player = player.toJSON();
            player.level = 1;
            player.xp = 0;
            player = new PlayerData(player);
            const result = await PlayerData.replaceOne({_id:player.id}, player);
            return res.status(200).json(result);
        } else return res.status(400).send('Bad Request...');
    }
};

module.exports = PlayerController;
