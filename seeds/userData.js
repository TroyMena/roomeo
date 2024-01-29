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
  {
    username: 'Jonathan Jones',
    email: "gfdgdfgfd554ffg@gmail.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Emily Anderson',
    email: "gfgr56dfg@gmail.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Jim Smith',
    email: "THEJimSmith@gmail.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Maria Gonzalez',
    email: "gdsfzgzds@gmail.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Kevin Johnson',
    email: "gfhfgd@gmail.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Gertrude Walters',
    email: "fdasfgretre@gmail.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Justin Drew Bieber',
    email: "JustinOfficial@JustinBieber.com",
    password: "Fsfdsfds443!"
  }, 
  {
    username: 'Archibald Cyrus Kennedy VI',
    email: "goodjob@gmail.com",
    password: "Fsfdsfds443!"
  }, 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
