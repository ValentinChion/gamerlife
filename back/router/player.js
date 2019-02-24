const { Router } = require('express');

const router = new Router();
const PlayerController = require('./../controllers/player.js');

router.get('/', PlayerController.getPlayer);
router.post('/', PlayerController.newPlayer);

router.get('/:playerId/tasks', PlayerController.getPlayerTasks);
router.post('/:playerId/tasks', PlayerController.newTaskOfPlayer);

router.patch('/', PlayerController.updatePlayerLevel);
router.patch('/:playerId/reset', PlayerController.resetStats);

module.exports = router;
