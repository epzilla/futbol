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
    code: {
      field: 'code',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    primaryColor: {
      field: 'primary_color',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    secondaryColor: {
      field: 'secondary_color',
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
