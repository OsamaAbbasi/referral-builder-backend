const mongoose = require("mongoose");

const referralSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  address1: String,
  address2: String,
  suburb: String,
  state: String,
  postCode: String,
  country: String,
});

module.exports = mongoose.model("Referral", referralSchema);
