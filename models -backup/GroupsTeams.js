/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GroupsTeams', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    groupId: {
      field: 'group_id',
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
    tableName: 'groups_teams',
    timestamps: false,
    freezeTableName: true
  });
};
