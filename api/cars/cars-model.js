const db = require('../../data/db-config');

const getAll = () => {
  return db('cars');
};

const getById = (id) => {
  return db('cars').where({id}).first();
}

const create = async (account) => {
  const [id] = await db('cars').insert();
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create
};