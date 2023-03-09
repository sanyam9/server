const entriesServices = require('../services/entries.js');

const getAllEntriesById = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const entries = await entriesServices.getAllEntriesById(collectionId);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEntry = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const entry = await entriesServices.createEntry(collectionId, req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEntriesById,
  createEntry,
};
