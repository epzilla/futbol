/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tags', {
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
      allowNull: false,
      defaultValue: undefined
    },
    slug: {
      field: 'slug',
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    grade: {
      field: 'grade',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    parentId: {
      field: 'parent_id',
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
    tableName: 'tags',
    timestamps: false,
    freezeTableName: true
  });
};
