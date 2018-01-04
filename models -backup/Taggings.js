/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Taggings', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined,
      primaryKey: true
    },
    tagId: {
      field: 'tag_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: undefined
    },
    taggableType: {
      field: 'taggable_type',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    taggableId: {
      field: 'taggable_id',
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
    tableName: 'taggings',
    timestamps: false,
    freezeTableName: true
  });
};
