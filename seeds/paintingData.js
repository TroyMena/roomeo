const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Cardi B',
    artist: 'LedyX',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-cardib.jpg',
    description:
      'cardib',
  },
  {
    title: 'Cardi B',
    artist: 'WStudio',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-cardib.jpg',
    description: 'cardib',
  },
  {
    title: 'Obama',
    artist: 'S_Photo',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: '03-obama.jpg',
    description: 'obama',
  },
  {
    title: 'Headshot',
    artist: 'icemanphotos',
    exhibition_date: 'July 4, 2020',
    gallery_id: 2,
    filename: '04-obama.jpg',
    description: 'obama',
  },
  {
    title: 'Megan Thee Stallion',
    artist: 'DrivingJack',
    exhibition_date: 'October 15, 2018',
    gallery_id: 3,
    filename: '05-megan.jpg',
    description:
      'Megan',
  },
  {
    title: 'Award Show',
    artist: 'Vitalii_Mamchuk',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: '06-megan.jpg',
    description:
      'Megan',
  },
  {
    title: 'Gypsy Rose Blanchard',
    artist: 'Vlad Sokolovsky',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: '07-gypsy.jpg',
    description:
      'Gypsy',
  },
  {
    title: 'Gypsy Rose Blanchard',
    artist: 'Smit',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: '08-gypsy.jpg',
    description:
      'Gypsy',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
