const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Survey = require('./Survey');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

User.hasOne(Survey, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Survey.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Gallery, Painting, Survey };
