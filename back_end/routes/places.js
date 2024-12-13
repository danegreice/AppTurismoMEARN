var express = require('express');
var router = express.Router();
var placeController = require('../controllers/places.js');

router.get('/', placeController.getPlaces);
router.post('/', placeController.createPlace);
router.get('/:id', placeController.getOnePlace);
router.put('/:id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;