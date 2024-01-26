const sequelize = require('../config/connection');
const seedSurvey = require('./surveyData');
const seedGallery = require('./galleryData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSurvey();

  await seedGallery();

  process.exit(0);
};

seedAll();
