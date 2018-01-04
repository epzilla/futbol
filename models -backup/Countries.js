/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Countries', {
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
    code: {
      field: 'code',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    altNames: {
      field: 'alt_names',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    histNames: {
      field: 'hist_names',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    pop: {
      field: 'pop',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    area: {
      field: 'area',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    continentId: {
      field: 'continent_id',
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
    s: {
      field: 's',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    c: {
      field: 'c',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    d: {
      field: 'd',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    m: {
      field: 'm',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    motor: {
      field: 'motor',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    alpha2: {
      field: 'alpha2',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    alpha3: {
      field: 'alpha3',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    num: {
      field: 'num',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    fifa: {
      field: 'fifa',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    ioc: {
      field: 'ioc',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    fips: {
      field: 'fips',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    net: {
      field: 'net',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    wikipedia: {
      field: 'wikipedia',
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
    tableName: 'countries',
    timestamps: false,
    freezeTableName: true
  });
};
