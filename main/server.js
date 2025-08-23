const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const OfflineCenter=require("./models/offlinecenterModel");
const onlinecenter=require("./models/onlinecentermodel");
const diy = require("./models/diymodel")
const app = express();
const data = require("./offlinecenter.json");
const data2 = require("./onlinecenter.json");
const data3 = require("./diy.json");
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5500',  
  'http://localhost:5500'   
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/trashtrack")
  .then(async () => {
    console.log("MongoDB connected");

    // Offline
    if (await OfflineCenter.countDocuments() === 0) {
      await OfflineCenter.insertMany(data);
      console.log("Offline centers inserted!");
    }

    // Online
    if (await onlinecenter.countDocuments() === 0) {
      await onlinecenter.insertMany(data2);
      console.log("Online centers inserted!");
    }

    // DIY
    if (await diy.countDocuments() === 0) {
      await diy.insertMany(data3);
      console.log("DIY tips inserted!");
    }
  })
  .catch(err => console.error("DB Error:", err));
app.use('/api/auth', require('./routes/auth'));
app.use('/api',require("./routes/center"));

app.listen(5000, () => console.log('Server running on port 5000'));
