/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Grounds', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    key: {
      field: 'key',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    synonyms: {
      field: 'synonyms',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    countryId: {
      field: 'country_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    cityId: {
      field: 'city_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    since: {
      field: 'since',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    capacity: {
      field: 'capacity',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    address: {
      field: 'address',
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
    tableName: 'grounds',
    timestamps: false,
    freezeTableName: true
  });
};
