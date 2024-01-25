const sequelize = require('../config/connection');
const seedSurvey = require('./surveyData');
//const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSurvey();

  //await seedPaintings();

  process.exit(0);
};

seedAll();
