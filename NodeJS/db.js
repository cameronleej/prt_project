const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    // Update the connection URL 
    await mongoose.connect('mongodb+srv://prt-user:prt-password@prtdb.iubfrp0.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection succeeded.');
  } catch (err) {
    console.error('Error in DB connection: ' + err);
  }
}

connectToMongoDB(); // Call the async function to connect to MongoDB

module.exports = mongoose;