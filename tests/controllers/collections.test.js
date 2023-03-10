const collectionServices = require('../../src/services/collections');
const { describe, it, expect } = require('@jest/globals');

describe('Collections Controllers', () => {
  it('should get all collections', async () => {
    jest.spyOn(collectionServices, 'getAllCollections').mockResolvedValueOnce([
      {
        id: 1,
        name: 'Test Collection',
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
      },
    ]);
    const collections = await collectionServices.getAllCollections();
    expect(collections).toEqual([
      {
        id: 1,
        name: 'Test Collection',
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
      },
    ]);

    expect(collectionServices.getAllCollections).toHaveBeenCalledTimes(1);
  });

  it('should get all collection names', async () => {
    jest
      .spyOn(collectionServices, 'getAllCollectionNames')
      .mockResolvedValueOnce([
        {
          id: 1,
          name: 'Test Collection',
        },
      ]);
    const collectionNames = await collectionServices.getAllCollectionNames();
    expect(collectionNames).toEqual([
      {
        id: 1,
        name: 'Test Collection',
      },
    ]);

    expect(collectionServices.getAllCollectionNames).toHaveBeenCalledTimes(1);
  });

  it('should get a collection by id', async () => {
    jest.spyOn(collectionServices, 'getCollectionById').mockResolvedValueOnce({
      id: 1,
      name: 'Test Collection',
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });
    const collection = await collectionServices.getCollectionById(1);
    expect(collection).toEqual({
      id: 1,
      name: 'Test Collection',
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });

    expect(collectionServices.getCollectionById).toHaveBeenCalledTimes(1);
  });

  it('should delete a collection', async () => {
    jest.spyOn(collectionServices, 'deleteCollection').mockResolvedValueOnce(1);
    const deleted = await collectionServices.deleteCollection(1);
    expect(deleted).toEqual(1);

    expect(collectionServices.deleteCollection).toHaveBeenCalledTimes(1);
  });

  it('should create a collection', async () => {
    jest.spyOn(collectionServices, 'createCollection').mockResolvedValueOnce({
      id: 1,
      name: 'Test Collection',
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });
    const newCollection = await collectionServices.createCollection({
      name: 'Test Collection',
    });
    expect(newCollection).toEqual({
      id: 1,
      name: 'Test Collection',
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });

    expect(collectionServices.createCollection).toHaveBeenCalledTimes(1);
  });

  it('should update a collection', async () => {
    jest.spyOn(collectionServices, 'updateCollection').mockResolvedValueOnce({
      id: 1,
      name: 'Test Collection',
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });
    const updatedCollection = await collectionServices.updateCollection({
      id: 1,
      name: 'Test Collection',
    });
    expect(updatedCollection).toEqual({
      id: 1,
      name: 'Test Collection',
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });

    expect(collectionServices.updateCollection).toHaveBeenCalledTimes(1);
  });
});
