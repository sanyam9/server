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

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await entriesServices.deleteEntry(id);
    if (deleted) {
      return res.status(204).json({ message: 'Entry deleted' });
    }
    res.status(404).json({ error: `Entry with id ${id} not found` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEntry = await entriesServices.updateEntry(id, req.body);
    if (updatedEntry[0]===1) {
      return res.status(200).json(updatedEntry[1]);
    }
    res.status(404).json({ error: `Entry with id ${id} not found` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEntriesById,
  createEntry,
  deleteEntry,   
  updateEntry,
};
