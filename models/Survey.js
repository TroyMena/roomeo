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
      allowNull: false,
    },
    pets: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sleepWakeHours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parties: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cleanlinessLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    moveInDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationshipStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sharingItems: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    livingStyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drinkingHabits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    smoking: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    decorationStyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cleaningTasks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bathroom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petPeeves: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeSpentInApartment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    politicalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferredAgeRange: {
      type: DataTypes.STRING,
      allowNull: false,
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