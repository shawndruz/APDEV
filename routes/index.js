const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

// Fetch all posts
router.get('/posts', postController.getAllPosts);

// Create post
router.post('/createpost', postController.createPost);

// User login
router.post('/login', userController.login);

// User signup
router.post('/signup', userController.signup);

module.exports = router;
