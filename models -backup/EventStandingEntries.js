/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventStandingEntries', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    eventStandingId: {
      field: 'event_standing_id',
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
    pos: {
      field: 'pos',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    played: {
      field: 'played',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    won: {
      field: 'won',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    lost: {
      field: 'lost',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    drawn: {
      field: 'drawn',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    goalsFor: {
      field: 'goals_for',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    goalsAgainst: {
      field: 'goals_against',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    pts: {
      field: 'pts',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    comments: {
      field: 'comments',
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
    tableName: 'event_standing_entries',
    timestamps: false,
    freezeTableName: true
  });
};
