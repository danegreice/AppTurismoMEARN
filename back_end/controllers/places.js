const Place = require('../models/places.js')

exports.getPlaces = async(req, res) => {
    try {
        const places = await Place.PlaceModel.find();
        res.json(places)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getOnePlace = async (req, res) => {   
  try {;
    res.status(201).json(await Place.PlaceModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createPlace = async (req, res) => {   
    try {;
      res.status(201).json(await Place.PlaceModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updatePlace = async (req, res) => {   
    try {;
      res.status(201).json(await Place.PlaceModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deletePlace = async (req, res) => {   
    try {;
      res.status(201).json(await Place.PlaceModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }