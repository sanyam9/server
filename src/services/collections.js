const db = require('../models');

const getAllCollections = async () => {
  const collections = await db.collections.findAll();
  return collections;
};

const getAllCollectionNames = async () => {
  const collections = await db.collections.findAll({
    attributes: ['id','name'],
  });
  return collections;
};

const createCollection = async (collection) => {
  const newCollection = await db.collections.create(collection);
  return newCollection;
};

const getCollectionById = async (id) => {
  const collection = await db.collections.findOne({
    where: { id: Number(id) },
  });
  return collection;
};

const updateCollection = async (id, collection) => {
  const updated = await db.collections.update(collection, {
    where: { id: Number(id) },
    returning: true,
  });
  return updated;
};

const deleteCollection = async (id) => {
  const deleted = await db.collections.destroy({
    where: { id: Number(id) },
  });
  return deleted;
};

module.exports = {
  getAllCollections,
  getAllCollectionNames,
  createCollection,
  getCollectionById,
  updateCollection,
  deleteCollection,
};
