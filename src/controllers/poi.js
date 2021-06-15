const POI = require('../models/poi');

exports.createPOI = async (req, res) => {
    try
    {
        const newPOI = await POI.create(req.body);
    
        res.status(201).json({
            status: 'success',
            data: {
                poi: newPOI
            }
        });
    }
    catch (err)
    {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
    
};

exports.getAllPOIs = (req, res, next) => {

};

exports.getPOI = (req, res, next) => {

};

exports.updatePOI = (req, res, next) => {

};

exports.deletePOI = (req, res, next) => {

};