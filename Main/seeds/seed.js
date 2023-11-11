// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// // const SleepCycle = require('./projectData.json');
// const SleepCycle = require('../models/SleepCycle');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of SleepCycle) {
//     await SleepCycle.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();



const sequelize = require('../config/connection');
const { User, SleepCycle } = require('../models');

const userData = require('./userData.json');
const sleepCycleData = require('./sleepCycleData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const sleepCycle of sleepCycleData) {
      await SleepCycle.create({
        ...sleepCycle,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();