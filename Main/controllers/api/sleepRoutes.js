const router = require('express').Router();
const { SleepCycle } = require('../../models');
const withAuth = require('../../utils/auth');

// check auth on all project routes
router.use(withAuth)

router.post('/', async (req, res) => {
  try {
    // creates a new sleep cycle
    const newSleepCycle = await SleepCycle.create({
      hours_of_sleep: parseInt(req.body.hours_of_sleep),
      user_id: req.session.user_id,
      
    });
    console.log(newSleepCycle);
    res.status(200).json(newSleepCycle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete sleep cycle by id if it exist
    const sleepCycleData = await SleepCycle.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!sleepCycleData) {
      res.status(404).json({ message: 'No sleep cycle found with this id!' });
      return;
    }

    res.status(200).json(sleepCycleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

