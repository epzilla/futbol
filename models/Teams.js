/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Teams', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    shortName: {
      field: 'short_name',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    shorterName: {
      field: 'shorter_name',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    code: {
      field: 'code',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    bgColor: {
      field: 'bg_color',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    textColor: {
      field: 'text_color',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    tertiaryColor: {
      field: 'tertiary_color',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    }
  }, {
    tableName: 'teams',
    timestamps: false,
    freezeTableName: true
  });
};
