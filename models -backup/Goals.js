/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Goals', {
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
    gameId: {
      field: 'game_id',
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
    minute: {
      field: 'minute',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    offset: {
      field: 'offset',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    score1: {
      field: 'score1',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    score2: {
      field: 'score2',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined
    },
    penalty: {
      field: 'penalty',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
    },
    owngoal: {
      field: 'owngoal',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
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
    tableName: 'goals',
    timestamps: false,
    freezeTableName: true
  });
};
