'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.entries, {
        foreignKey: 'collectionId',
        sourceKey: 'id',
      });
    }
  }
  collections.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      fields: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: 'collections',
    }
  );
  return collections;
};
