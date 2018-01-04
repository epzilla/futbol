/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Places', {
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
    kind: {
      field: 'kind',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    lat: {
      field: 'lat',
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: undefined
    },
    lng: {
      field: 'lng',
      type: DataTypes.FLOAT,
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
    tableName: 'places',
    timestamps: false,
    freezeTableName: true
  });
};
