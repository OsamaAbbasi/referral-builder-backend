const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Referral = require("../models/referral");

router.get("/", (req, res, next) => {
  Referral.find()
    .exec()
    .then((collection) => {
      res.status(200).json(collection);
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  const referral = new Referral({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
    address1: req.body.address1,
    address2: req.body.address2,
    suburb: req.body.suburb,
    state: req.body.state,
    postCode: req.body.postCode,
    country: req.body.country,
  });
  referral
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Referral created!",
        createdReferral: result,
      });
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
