const entriesServices = require('../../src/services/entries');
const { describe, it, expect } = require('@jest/globals');

describe('Entries Controllers', () => {
  it('should get all entries by collection id', async () => {
    jest.spyOn(entriesServices, 'getAllEntriesById').mockResolvedValueOnce([
      {
        id: 1,
        title: 'Test Entry',
        content: 'Test Content',
        collectionId: 1,
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
      },
    ]);
    const entries = await entriesServices.getAllEntriesById(1);
    expect(entries).toEqual([
      {
        id: 1,
        title: 'Test Entry',
        content: 'Test Content',
        collectionId: 1,
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
      },
    ]);

    expect(entriesServices.getAllEntriesById).toHaveBeenCalledTimes(1);
  });

  it('should create an entry', async () => {
    jest.spyOn(entriesServices, 'createEntry').mockResolvedValueOnce({
      id: 1,
      title: 'Test Entry',
      content: 'Test Content',
      collectionId: 1,
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });
    const newEntry = await entriesServices.createEntry({
      title: 'Test Entry',
      content: 'Test Content',
      collectionId: 1,
    });
    expect(newEntry).toEqual({
      id: 1,
      title: 'Test Entry',
      content: 'Test Content',
      collectionId: 1,
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });

    expect(entriesServices.createEntry).toHaveBeenCalledTimes(1);
  });

  it('should delete an entry', async () => {
    jest.spyOn(entriesServices, 'deleteEntry').mockResolvedValueOnce(1);
    const deleted = await entriesServices.deleteEntry(1);
    expect(deleted).toEqual(1);

    expect(entriesServices.deleteEntry).toHaveBeenCalledTimes(1);
  });

  it('should update an entry', async () => {
    jest.spyOn(entriesServices, 'updateEntry').mockResolvedValueOnce([
      1,
      [
        {
          id: 1,
          title: 'Test Entry',
          content: 'Test Content',
          collectionId: 1,
          createdAt: '2021-08-01T00:00:00.000Z',
          updatedAt: '2021-08-01T00:00:00.000Z',
        },
      ],
    ]);
    const updated = await entriesServices.updateEntry(1, {
      title: 'Test Entry',
      content: 'Test Content',
      collectionId: 1,
    });
    expect(updated).toEqual([
      1,
      [
        {
          id: 1,
          title: 'Test Entry',
          content: 'Test Content',
          collectionId: 1,
          createdAt: '2021-08-01T00:00:00.000Z',
          updatedAt: '2021-08-01T00:00:00.000Z',
        },
      ],
    ]);

    expect(entriesServices.updateEntry).toHaveBeenCalledTimes(1);
  });
});
