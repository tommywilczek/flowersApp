const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Flower = require('../models/flowerModel');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET Requests to /flowers'
    });
});

router.post('/', (req, res, next) => {
    const newFlower = new Flower({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    newFlower
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST Requests to /flowers',
        createdFlower: newFlower 
    });
});

router.get('/:flowerId', (req, res, next) => {
    const id = req.params.flowerId;
    Flower.findById(id)
    .exec()
    .then(doc => {
        console.log("from database", doc);
        res.status(200).json(doc)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}); 

router.patch('/:flowerId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:flowerId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;
