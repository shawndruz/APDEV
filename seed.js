const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chivogue', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Sample users
const seedUsers = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
    { username: 'user2', email: 'user2@example.com', password: 'password2' },
    { username: 'user3', email: 'user3@example.com', password: 'password3' },
    { username: 'user4', email: 'user4@example.com', password: 'password4' },
    { username: 'user5', email: 'user5@example.com', password: 'password5' },
];

// Sample posts
const seedPosts = [
    { topic: 'Topic1', header: 'Header1', content: 'Content1', author: null },
    { topic: 'Topic2', header: 'Header2', content: 'Content2', author: null },
    { topic: 'Topic3', header: 'Header3', content: 'Content3', author: null },
    { topic: 'Topic4', header: 'Header4', content: 'Content4', author: null },
    { topic: 'Topic5', header: 'Header5', content: 'Content5', author: null },
];

async function seedDB() {
    try {
        await User.deleteMany({});
        await Post.deleteMany({});
        console.log('Existing data cleared.');

        const createdUsers = await User.insertMany(seedUsers);
        console.log('Sample users added.');

        seedPosts.forEach((post, index) => {
            post.author = createdUsers[index % createdUsers.length]._id;
        });

        await Post.insertMany(seedPosts);
        console.log('Sample posts added.');

        console.log('Database seeded successfully!');
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
        mongoose.connection.close();
    }
}

seedDB();
