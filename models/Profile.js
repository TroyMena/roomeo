const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

// create fields/columns for Profile model
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
        ageRange: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
    
    },
    {
    // Pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = Profile;