/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cities', {
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
    code: {
      field: 'code',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    altNames: {
      field: 'alt_names',
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
    stateId: {
      field: 'state_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    partId: {
      field: 'part_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    countyId: {
      field: 'county_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    muniId: {
      field: 'muni_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    metroId: {
      field: 'metro_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    pop: {
      field: 'pop',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    area: {
      field: 'area',
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
    tableName: 'cities',
    timestamps: false,
    freezeTableName: true
  });
};
