const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: Number,
        default: 1,
    },
    xp: {
        type: Number,
        default: 0,
    },
    avatar: {
        type: String,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
});

module.exports = mongoose.model('Player', PlayerSchema);
