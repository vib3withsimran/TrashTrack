const mongoose = require("mongoose");

const  onlinecenterSchema = new mongoose.Schema({
    name:String,
    website:String,
    contact:String,
});
const onlinecenter = mongoose.model("onlinecenter", onlinecenterSchema);
module.exports = onlinecenter;
