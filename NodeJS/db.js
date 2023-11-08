const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/PRTdb');
    console.log('MongoDB connection succeeded.');
  } catch (err) {
    console.error('Error in DB connection: ' + err);
  }
}

connectToMongoDB(); // Call the async function to connect to MongoDB

module.exports = mongoose;

