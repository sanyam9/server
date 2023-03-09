const router = require('express').Router();
const collectionsController = require('../../src/controllers/collections');
const entriesController = require('../controllers/entries.js');

router.route('/collections')
  .get(collectionsController.getAllCollections)
  .post(collectionsController.createCollection);

router.route('/collection/:id')
  .get(collectionsController.getCollectionById)
  .patch(collectionsController.updateCollection)
  .delete(collectionsController.deleteCollection);

router.route('/entries/:collectionId')
  .get(entriesController.getAllEntriesById)
  .post(entriesController.createEntry);


module.exports = router;