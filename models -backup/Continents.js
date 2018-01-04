/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Continents', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    slug: {
      field: 'slug',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    key: {
      field: 'key',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    placeId: {
      field: 'place_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    altNames: {
      field: 'alt_names',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: undefined
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: undefined
    }
  }, {
    tableName: 'continents',
    timestamps: false,
    freezeTableName: true
  });
};
