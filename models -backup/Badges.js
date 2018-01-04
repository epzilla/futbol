/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Badges', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    teamId: {
      field: 'team_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    leagueId: {
      field: 'league_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    seasonId: {
      field: 'season_id',
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
    tableName: 'badges',
    timestamps: false,
    freezeTableName: true
  });
};
