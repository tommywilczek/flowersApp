const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Flower = require('../models/flowerModel');

router.get('/', (req, res, next) => {
    Flower.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const newFlower = new Flower({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        any: req.body.any
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
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(404).json({message: 'No valid entry found for provided ID'});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}); 

router.patch('/:flowerId', (req, res, next) => {
    const id = req.params.flowerId // extract the ID from the URL (the :flowerId)
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Flower.update({ _id: id }, { $set: updateOps}) // $set is a Mongoose thing
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

// NOTES FOR PATCH: 
// The request has to be given an array that looks like this:
// [
// 	{
//     	"propName": "name",
//     	"value": "thorny rose"
// 	}
// ]

router.delete('/:flowerId', (req, res, next) => {
    const id = req.params.flowerId
    Flower.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;
