/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Events', {
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
    leagueId: {
      field: 'league_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      references: {
        model: 'leagues',
        key: 'id'
      }
    },
    seasonId: {
      field: 'season_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    startAt: {
      field: 'start_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: undefined
    },
    endAt: {
      field: 'end_at',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: undefined
    },
    team3: {
      field: 'team3',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 't'
    },
    sources: {
      field: 'sources',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    config: {
      field: 'config',
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
    tableName: 'events',
    timestamps: false,
    freezeTableName: true
  });
};
