// postController.js
const Post = require('../models/Post');

exports.getAllPosts = (req, res) => {
    Post.find().populate('author').exec((err, posts) => {
        if (err) return res.status(500).send(err);
        res.json(posts);
    });
};

exports.createPost = (req, res) => {
    const newPost = new Post({
        topic: req.body.topic,
        header: req.body.header,
        content: req.body.content,
        author: req.body.author
    });

    newPost.save((err) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
};

// userController.js
const User = require('../models/User');

exports.login = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username, password: password }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.json({ success: false, message: 'Invalid credentials' });

        res.json({ success: true, username: user.username });
    });
};

exports.signup = (req, res) => {
    const { email, username, password } = req.body;

    const newUser = new User({ email, username, password });

    newUser.save((err) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true, username: newUser.username });
    });
};
