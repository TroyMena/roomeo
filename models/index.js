// import models
const User = require('./User');
const Survey = require('./Survey');
const Profile = require('./Profile'); 


// user has one survey
User.hasOne(Survey, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// survey belongs to user
Survey.belongsTo(User, {
  foreignKey: 'user_id'
});

// user has one profile
User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// profile belongs to user
Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Survey, Profile };

