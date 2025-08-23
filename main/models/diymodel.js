const mongoose = require("mongoose");

const diySchema = new mongoose.Schema({
    wasteType:String,
    tips:{
        type:[String],
    }
}
);
 const diymodel = mongoose.model("diymodel",diySchema);
 module.exports = diymodel;
