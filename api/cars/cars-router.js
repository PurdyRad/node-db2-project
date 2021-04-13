const express = require('express');
const Car = require('./cars-model');
const { checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid } = require('./cars-middleware');
    
const router = express.Router();

router.get('/', (req,res,next) => {
    Car.getAll()
    .then(res => {
        console.log('res', res);
        res.status(200).json(res);
    })
    .catch(err => {
        console.error('err', err);
        next(err);
    });
});
router.get('/:id', checkCarId, (req,res) => {
    console.log('req.car', req.car)
    res.status(200).json(req.car);
})

router.post('/', (req,res,next) => {
    console.log('router post');
});

router.put('/:id', (req,res,next) => {
    console.log('router put');
});

router.delete('/:id', (req,res,next) => {
    console.log('router delete');
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({ 
        message: err.message, stack: err.stack 
    });
  });

module.exports = router;