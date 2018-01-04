/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Names', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    placeId: {
      field: 'place_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    placeKind: {
      field: 'place_kind',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    lang: {
      field: 'lang',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'en'
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
    tableName: 'names',
    timestamps: false,
    freezeTableName: true
  });
};
