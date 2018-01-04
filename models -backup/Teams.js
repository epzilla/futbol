/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Teams', {
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
    title2: {
      field: 'title2',
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
    club: {
      field: 'club',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    since: {
      field: 'since',
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
    web: {
      field: 'web',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    assocId: {
      field: 'assoc_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    national: {
      field: 'national',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
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
    tableName: 'teams',
    timestamps: false,
    freezeTableName: true
  });
};
