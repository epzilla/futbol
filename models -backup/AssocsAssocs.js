/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AssocsAssocs', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    assoc1Id: {
      field: 'assoc1_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    assoc2Id: {
      field: 'assoc2_id',
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'assocs_assocs',
    timestamps: false,
    freezeTableName: true
  });
};
