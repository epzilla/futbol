/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Assocs', {
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
    since: {
      field: 'since',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    web: {
      field: 'web',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    countryId: {
      field: 'country_id',
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
    continental: {
      field: 'continental',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    intercontinental: {
      field: 'intercontinental',
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
    tableName: 'assocs',
    timestamps: false,
    freezeTableName: true
  });
};
