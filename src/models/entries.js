'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.collections, {
        foreignKey: 'collectionId',
        sourceKey: 'id',
      });
    }
  }
  entries.init(
    {
      record: {
        allowNull: false,
        type: DataTypes.JSONB,
      },
      collectionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'collections',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'entries',
    }
  );
  return entries;
};
