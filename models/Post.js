const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic: String,
    header: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Post', postSchema);
