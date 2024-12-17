const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://teste:teste@cluster0.ltwob.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

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
