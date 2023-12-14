const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router();

const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const User = require("../models/userModel");


router.post('/api/user/registration', async (req, res) => {
  const newUser = new User(req.body);
  try{
    await newUser.save();
    res.send(`Registration Completed Mr/Mrs. ${newUser.name}`);
  } catch(err){
    res.send("Please try again");
  }
});

router.get('/api/user/info', async (req, res) => {
  try {

    const id = new ObjectId(req.query.id);

    // Assuming 'name' is a property in your User model
    const userDetail = await User.findOne({ _id: id });

    if (userDetail) {
      // User found, sending user data as a response
      res.send(userDetail);
    } else {
      // User not found
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;