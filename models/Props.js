/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Props', {
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
    value: {
      field: 'value',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    kind: {
      field: 'kind',
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
    tableName: 'props',
    timestamps: false,
    freezeTableName: true
  });
};
