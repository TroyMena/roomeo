const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Survey extends Model {}

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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
    preferredAgeRange: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
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