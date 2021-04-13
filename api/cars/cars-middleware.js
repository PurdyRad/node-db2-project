const Car = require('./cars-model');

const checkCarId = async (req, res, next) => {
  const car = await Car.getById(req.params.id);
  if (car) {
    req.car = car;
  } else {
    res.status(404).json({message: `car with id ${req.params.id} is not found`});
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}