const mongoose = require('mongoose');
const User = require('./User')

const reactionSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    reactionText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: Date.now},
    userName: {type: String, required: true},
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: Date.now},
    userName: {type: String, required: true},
    reactions: [reactionSchema],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;