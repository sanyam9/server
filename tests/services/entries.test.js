const db = require('../../src/models');
const { describe, it, expect } = require('@jest/globals');

describe('Entries Services', () => {
  it('should get all entries by collection id', async () => {
    jest.spyOn(db.entries, 'findAll').mockResolvedValueOnce([
      {
        id: 1,
        title: 'Test Entry',
        content: 'Test Content',
        collectionId: 1,
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
      },
    ]);
    const entries = await db.entries.findAll({ where: { collectionId: 1 } });
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

    expect(db.entries.findAll).toHaveBeenCalledTimes(1);
  });

  it('should create an entry', async () => {
    jest.spyOn(db.entries, 'create').mockResolvedValueOnce({
      id: 1,
      title: 'Test Entry',
      content: 'Test Content',
      collectionId: 1,
      createdAt: '2021-08-01T00:00:00.000Z',
      updatedAt: '2021-08-01T00:00:00.000Z',
    });
    const newEntry = await db.entries.create({
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

    expect(db.entries.create).toHaveBeenCalledTimes(1);
  });

  it('should delete an entry', async () => {
    jest.spyOn(db.entries, 'destroy').mockResolvedValueOnce(1);
    const deleted = await db.entries.destroy({ where: { id: 1 } });
    expect(deleted).toEqual(1);

    expect(db.entries.destroy).toHaveBeenCalledTimes(1);
  });

  it('should update an entry', async () => {
    jest.spyOn(db.entries, 'update').mockResolvedValueOnce([
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
    const updated = await db.entries.update(
      {
        title: 'Test Entry',
        content: 'Test Content',
        collectionId: 1,
      },
      { where: { id: 1 }, returning: true }
    );
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

    expect(db.entries.update).toHaveBeenCalledTimes(1);
  });
  
});
