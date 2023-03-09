const db = require('../models');

const getAllEntriesById = async (collectionId) => {
  const entries = await db.entries.findAll({
    where: { collectionId: Number(collectionId) },
  });
  return entries;
};

const createEntry = async (collectionId, entry) => {
  const newEntry = await db.entries.create({ ...entry, collectionId });
  return newEntry;
};

module.exports = {
  getAllEntriesById,
  createEntry,
};
