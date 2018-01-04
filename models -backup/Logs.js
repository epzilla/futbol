/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Logs', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    msg: {
      field: 'msg',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    level: {
      field: 'level',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    app: {
      field: 'app',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    tag: {
      field: 'tag',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    pid: {
      field: 'pid',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    tid: {
      field: 'tid',
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: undefined
    },
    ts: {
      field: 'ts',
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
    tableName: 'logs',
    timestamps: false,
    freezeTableName: true
  });
};
