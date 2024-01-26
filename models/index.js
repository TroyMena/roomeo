const User = require('./User');
const Survey = require('./Survey');
const Profile = require('./Profile'); 

User.hasOne(Survey, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Survey.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Survey, Profile };

