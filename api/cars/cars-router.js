const express = require('express');
const Car = require('./cars-model');
const { checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid } = require('./cars-middleware');

const router = express.Router();

router.get('/', (req,res,next) => {
    Car.getAll()
        .then(cars => {
            // console.log('cars', cars);
            res.status(200).json(cars);
        })
        .catch(err => {
        //     console.error('err', err);
            next(err);
        });
});

router.get('/:id', checkCarId, (req,res) => {
    res.status(200).json(req.car);
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req,res,next) => {
   try {
       const newCar = await Car.create(req.body)
       res.status(201).json(newCar);
   } catch(err) {
       next(err);
   }
});


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({ 
        message: err.message, stack: err.stack 
    });
  });

module.exports = router;