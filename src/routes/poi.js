import express from 'express';

const poiController = require('../controllers/poi');

const poi = express.Router();


poi
    .route('/')
    .get(poiController.getAllPOIs)
    .post(poiController.createPOI);

poi
    .route('/:id')
    .get(poiController.getPOI)
    .patch(poiController.updatePOI)
    .delete(poiController.deletePOI);



export default poi;