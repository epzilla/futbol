/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Groups', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    eventId: {
      field: 'event_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    pos: {
      field: 'pos',
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'groups',
    timestamps: false,
    freezeTableName: true
  });
};
