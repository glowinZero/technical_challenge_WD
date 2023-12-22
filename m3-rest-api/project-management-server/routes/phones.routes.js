const express = require("express");
const path = require("path");

const router = express.Router();

const phonesData = require("../db/Data/phones.json");

router.get("/phones/:phonesId", (req, res) => {
  const { phonesId } = req.params;
  console.log("phonesId:", phonesId);

  const phone = phonesData.find((ph) => ph.id === Number(phonesId));

  if (!phone) {
    return res.status(404).json({ message: "Phone not found" });
  }

  res.json(phone);
});


router.get("/phones", (req, res) => {
  res.json(phonesData);
});

module.exports = router;

