const mongoose = require("mongoose");

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

var Schema = mongoose.Schema;

const place = new Schema({
  name: { type: String, required: true },
  type: { type: String },
  rating: { type: Number, required: true },
  latitude: { type: Number },
  longitude: { type: Number },
  description: { type: String, required: true },
  photos: { type: Array },
});

const PlaceModel = mongoose.model("places", place);

module.exports = { PlaceModel };
