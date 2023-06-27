const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE);
    console.log('Database connected: ', connect.connection.host);
    console.log('Date: ', new Date(Date.now()).toUTCString());
  } catch (error) {
    console.log('Error connect to databse');
  }
};

module.exports = connectDB;
