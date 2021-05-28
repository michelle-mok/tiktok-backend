export default function followModel(sequelize, DataTypes) {
  return sequelize.define(
    'follows',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      followedId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'followedId',
        },
      },
      followerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'followerId',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}