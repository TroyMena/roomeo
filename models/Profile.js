const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        // Define other profile attributes here, such as name, age, etc.
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        // Add more attributes as needed for your specific profile model
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = Profile;