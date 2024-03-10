const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ankit:ankit%40123@cluster0.0l92tbr.mongodb.net/shiftTime?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema for your user model
const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: String,
  firstName: String,
  lastName: String,
  gender: String,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sign-up route
app.post('/signup', async (req, res) => {
  try {
    const { email, username, password, role, firstName, lastName, gender } = req.body;
    
    // Check if user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User with the same email or username already exists' });
    }
    
    const newUser = new User({ email, username, password, role, firstName, lastName, gender });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch users route
app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If everything is okay, send back the user data
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
