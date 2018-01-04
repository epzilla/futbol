/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CountryCodes', {
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
    countryId: {
      field: 'country_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    }
  }, {
    tableName: 'country_codes',
    timestamps: false,
    freezeTableName: true
  });
};
