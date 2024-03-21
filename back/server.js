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
  plan: String 
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sign-up route
app.post('/signup', async (req, res) => {
  try {
    const { email, username, password, role, firstName, lastName, gender} = req.body;
    
    // Check if user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User with the same email or username already exists' });
    }
    
    const newUser = new User({ email, username, password, role, firstName, lastName, gender,  plan: ''});
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete user route
// Update user route
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the user by id
    const result = await User.deleteOne({ _id: id });

    // Check if the user was deleted successfully
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
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

  // Update user route
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const { firstName, lastName, email, gender } = req.body;

    // Find the user by id
    const user = await User.findById(id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user details
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.gender = gender;

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'User details updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


  // Subscription route
  app.post('/subscribe', async (req, res) => {
    try {
      console.log("Received subscription request:", req.body); 
      const { plan, email } = req.body;      
      // Find user by email
      const user = await User.findOne({ email });
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's plan
      user.plan = plan;
      await user.save();
  
      res.status(200).json({ message: 'Subscription successful', user });
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
