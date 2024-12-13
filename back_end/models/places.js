const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

mongoose.connect("mongodb://127.0.0.1/juggle", { useNewUrlParser: true });

var Schema = mongoose.Schema;

const place = new Schema({
  id: { type: ObjectId, required: true },
  name: { type: String, required: true },
  type: { type: String },
  rating: { type: Float64Array, required: true },
  latitude: { type: Float64Array },
  longitude: { type: Float64Array },
  description: { type: String, required: true },
  photos: { type: Array },
});

const PlaceModel = mongoose.model("places", place);

module.exports = { PlaceModel };
