/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usages', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    countryId: {
      field: 'country_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    langId: {
      field: 'lang_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    official: {
      field: 'official',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 't'
    },
    minor: {
      field: 'minor',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    percent: {
      field: 'percent',
      type: DataTypes.FLOAT,
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
    tableName: 'usages',
    timestamps: false,
    freezeTableName: true
  });
};
