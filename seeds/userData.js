const { User } = require('../models');

const userdata = [
  {
    username: 'Cardi B',
    email: "cardiB@yahoo.com",
    password: "password12345"

  },
  {
    username: 'Obama',
    email: "Obama@usa.gov",
    password: "password12345"
  },
  {
    username: 'Megan Thee Stallion',
    email: "THEmegan@gmail.com",
    password: "password12345"
  },
  {
    username: 'Gypsy Rose Blanchard',
    email: "gypsy@msn.com",
    password: "password12345"
  }, 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
