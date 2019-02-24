const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    importance: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Task', TaskSchema);
