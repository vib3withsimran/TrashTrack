const express = require("express");
const router = express.Router();
const OfflineCenter = require("../models/offlinecenterModel");
const onlinecenter  = require("../models/onlinecentermodel");
const diymodel = require("../models/diymodel");

router.post("/search", async (req, res) => {
  try {
    const { district, wasteType } = req.body;

    
    const offlineDocs = await OfflineCenter.find({
      district: new RegExp(`^${district}$`, "i"),
      wasteType: new RegExp(`^${wasteType}$`, "i"),
    });
    console.log("Search query:", district, wasteType);
   
    
    const offlineResults = offlineDocs.flatMap(doc => doc.centers);

    
    const onlineResults = await onlinecenter.find();

    //
    const diyDocs = await diymodel.find({
      wasteType: new RegExp(`^${wasteType}$`, "i"),
    });
    const diyResults = diyDocs.flatMap(doc => doc.tips);

    
    res.json({
      offline: offlineResults || [],
      online: onlineResults || [],
      diy: diyResults || [],
    });

  } catch (err) {
    console.error("Error in /search:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
