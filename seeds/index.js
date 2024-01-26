const sequelize = require('../config/connection');
const seedSurvey = require('./surveyData');
const seedPaintings = require('./paintingData');
const seedGallery = require('./galleryData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSurvey();

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();
