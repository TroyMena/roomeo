const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

// create our Survey model
class Survey extends Model {}

// create fields/columns for Survey model
Survey.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define other survey attributes here, such as temperature preferance, pets, etc.
    temperature_pref: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pets: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sleepWakeHours: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parties: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cleanlinessLevel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    moveInDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    relationshipStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sharingItems: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    livingStyle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkingHabits: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    smoking: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    decorationStyle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cleaningTasks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bathroom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    petPeeves: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeSpentInApartment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    politicalStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ageRange: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'survey',
  }
);

module.exports = Survey;