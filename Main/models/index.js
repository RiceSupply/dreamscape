const User = require('./User');
const SleepCycle = require('./SleepCycle');

User.hasMany(SleepCycle, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

SleepCycle.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, SleepCycle };
