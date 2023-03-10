const db = require('../../src/models');
const { describe, it, expect } = require('@jest/globals');

describe('Collections Services', () => {
  it('should get all collections', async () => {
    jest.spyOn(db.collections, 'findAll').mockResolvedValueOnce([]);
    const collections = await db.collections.findAll();
    expect(collections).toEqual([]);
  });

  it('should get all collection names', async () => {
    jest.spyOn(db.collections, 'findAll').mockResolvedValueOnce([]);
    const collections = await db.collections.findAll({
      attributes: ['id', 'name'],
    });
    expect(collections).toEqual([]);
  });

  it('should create a collection', async () => {
    jest.spyOn(db.collections, 'create').mockResolvedValueOnce({});
    const collection = await db.collections.create({});
    expect(collection).toEqual({});
  });

  it('should get a collection by id', async () => {
    jest.spyOn(db.collections, 'findOne').mockResolvedValueOnce({});
    const collection = await db.collections.findOne({
      where: { id: 1 },
    });
    expect(collection).toEqual({});
  });

  it('should update a collection', async () => {
    jest.spyOn(db.collections, 'update').mockResolvedValueOnce([1, [{}]]);
    const updated = await db.collections.update(
      {},
      {
        where: { id: 1 },
        returning: true,
      }
    );
    expect(updated).toEqual([1, [{}]]);
  });

  it('should delete a collection', async () => {
    jest.spyOn(db.collections, 'destroy').mockResolvedValueOnce(1);
    const deleted = await db.collections.destroy({
      where: { id: 1 },
    });
    expect(deleted).toEqual(1);
  });
});
