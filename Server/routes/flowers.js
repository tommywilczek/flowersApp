const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET Requests to /flowers'
    });
});

router.post('/', (req, res, next) => {
    const newFlower = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST Requests to /flowers',
        createdFlower: newFlower 
    });
});

router.get('/:flowerId', (req, res, next) => {
    const id = req.params.flowerId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You Passed an ID'
        });
    }
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
