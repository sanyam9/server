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

const deleteEntry = async (id) => {
  return await db.entries.destroy({ where: { id: Number(id) } });
};

const updateEntry = async (id, entry) => {
  const updated = await db.entries.update(entry, {
    where: { id: Number(id) },
    returning: true,
  });
  return updated;
};

module.exports = {
  getAllEntriesById,
  createEntry,
  deleteEntry,
  updateEntry,
};
