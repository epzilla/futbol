/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parts', {
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
    abbr: {
      field: 'abbr',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    iso: {
      field: 'iso',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    nuts: {
      field: 'nuts',
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
    stateId: {
      field: 'state_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    level: {
      field: 'level',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
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
    tableName: 'parts',
    timestamps: false,
    freezeTableName: true
  });
};
