/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rounds', {
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
      defaultValue: undefined,
      references: {
        model: 'events',
        key: 'id'
      }
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    title2: {
      field: 'title2',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    pos: {
      field: 'pos',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    knockout: {
      field: 'knockout',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'f'
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
    auto: {
      field: 'auto',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 't'
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
    tableName: 'rounds',
    timestamps: false,
    freezeTableName: true
  });
};
