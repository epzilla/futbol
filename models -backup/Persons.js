/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Persons', {
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
    name: {
      field: 'name',
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
    code: {
      field: 'code',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    bornAt: {
      field: 'born_at',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: undefined
    },
    cityId: {
      field: 'city_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    stateId: {
      field: 'state_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    countryId: {
      field: 'country_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    nationalityId: {
      field: 'nationality_id',
      type: DataTypes.INTEGER,
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
    tableName: 'persons',
    timestamps: false,
    freezeTableName: true
  });
};
