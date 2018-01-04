/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rosters', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    personId: {
      field: 'person_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    teamId: {
      field: 'team_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    eventId: {
      field: 'event_id',
      type: DataTypes.INTEGER,
      allowNull: true,
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
    tableName: 'rosters',
    timestamps: false,
    freezeTableName: true
  });
};
