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
