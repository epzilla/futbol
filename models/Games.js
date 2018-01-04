/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Games', {
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
      allowNull: true,
      defaultValue: undefined
    },
    roundId: {
      field: 'round_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      references: {
        model: 'rounds',
        key: 'id'
      }
    },
    pos: {
      field: 'pos',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    groupId: {
      field: 'group_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    team1Id: {
      field: 'team1_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    team2Id: {
      field: 'team2_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    playAt: {
      field: 'play_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: undefined
    },
    postponed: {
      field: 'postponed',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    playAtV2: {
      field: 'play_at_v2',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: undefined
    },
    playAtV3: {
      field: 'play_at_v3',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: undefined
    },
    groundId: {
      field: 'ground_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    cityId: {
      field: 'city_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    knockout: {
      field: 'knockout',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    home: {
      field: 'home',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 't'
    },
    score1: {
      field: 'score1',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score2: {
      field: 'score2',
      type: 'BLOB',
      allowNull: true,
      defaultValue: undefined
    },
    score1et: {
      field: 'score1et',
      type: 'NUMERIC',
      allowNull: true,
      defaultValue: undefined
    },
    score2et: {
      field: 'score2et',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score1p: {
      field: 'score1p',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score2p: {
      field: 'score2p',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score1i: {
      field: 'score1i',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score2i: {
      field: 'score2i',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score1ii: {
      field: 'score1ii',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score2ii: {
      field: 'score2ii',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    nextGameId: {
      field: 'next_game_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    prevGameId: {
      field: 'prev_game_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    winner: {
      field: 'winner',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    winner90: {
      field: 'winner90',
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
    tableName: 'games',
    timestamps: false,
    freezeTableName: true
  });
};
