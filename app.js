const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/chivogue');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Serve HTML files from 'views' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'website.html'));
});

app.get('/createpost', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'createpost.html'));
});

app.get('/editprofile', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'editprofile.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/userpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'userpage.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

