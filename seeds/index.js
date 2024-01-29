const sequelize = require('../config/connection');
const seedSurvey = require('./surveyData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedSurvey();

  process.exit(0);
};

seedAll();
