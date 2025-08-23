const mongoose = require("mongoose");

const centerSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  address: {
    type: String,
  },
  website: {
    type: String,
  },
  contact: {
    type: String,
  }
});

const offlineCenterSchema = new mongoose.Schema({
  district: {
    type: String,
    required: true
  },
  wasteType: {
    type: String,
    required: true
  },
  centers: [centerSchema] 
});

module.exports = mongoose.model("OfflineCenter", offlineCenterSchema);
