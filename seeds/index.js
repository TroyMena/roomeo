const sequelize = require('../config/connection');
const seedSurvey = require('./surveyData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSurvey();

  process.exit(0);
};

seedAll();
