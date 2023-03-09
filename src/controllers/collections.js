const collectionServices = require('../../src/services/collections');
const entriesServices = require('../services/entries.js');

const getAllCollections = async (req, res) => {
  try {
    const collections = await collectionServices.getAllCollections();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCollectionNames = async (req, res) => {
  try {
    const collections = await collectionServices.getAllCollectionNames();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCollection = async (req, res) => {
  try {
    const collection = await collectionServices.createCollection(req.body);
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = await collectionServices.getCollectionById(id);
    if (collection) {
      return res.status(200).json(collection);
    }
    res.status(404).json({ error: `Collection with id ${id} not found` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldField, newField } = req.body;

    // If both oldFiend & newField are present => replace
    if (oldField && newField) {
      const records = await entriesServices.getAllEntriesById(id);
      if (records.length > 0) {
        res
          .status(400)
          .json({
            error:
              'Cannot update field name. There are records in this collection.',
          });
      }
      const collection = await collectionServices.getCollectionById(id);
      if (collection) {
        const { fields } = collection;
        const index = fields.indexOf(oldField);
        fields[index] = newField;
        req.body.fields = fields;
      }
    }

    // If only oldField is present => delete
    else if (oldField) {
      const collection = await collectionServices.getCollectionById(id);
      if (collection) {
        let { fields } = collection;
        fields = fields.filter((eachField) => eachField !== oldField);
        req.body.fields = fields;
      }

      const entries = await entriesServices.getAllEntriesById(id);
      for await (const eachEntry of entries) {
        delete eachEntry.dataValues.record[oldField];
        await entriesServices.updateEntry(eachEntry.id, eachEntry.dataValues);
      }
    }

    // If only newField is present => add
    else if (newField) {
      const collection = await collectionServices.getCollectionById(id);
      if (collection) {
        const { fields } = collection;
        fields.push(newField);
        req.body.fields = fields;
      }

      const entries = await entriesServices.getAllEntriesById(id);
      for await (const eachEntry of entries) {
        eachEntry.dataValues.record[newField] = '';
        await entriesServices.updateEntry(eachEntry.id, eachEntry.dataValues);
      }
    }

    const updated = await collectionServices.updateCollection(id, req.body);
    if (updated[0] === 1) {
      return res.status(200).json(updated[1]);
    }
    res.status(404).json({ error: `Collection with id ${id} not found` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await collectionServices.deleteCollection(id);
    if (deleted) {
      return res.status(204).send('Collection deleted');
    }
    res.status(404).json({ error: `Collection with id ${id} not found` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCollections,
  getAllCollectionNames,
  createCollection,
  getCollectionById,
  updateCollection,
  deleteCollection,
};
