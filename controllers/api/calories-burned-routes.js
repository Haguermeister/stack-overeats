const router = require('express').Router();
const { CaloriesBurned } = require('../../models');

router.get('/:id', (req, res) => {
  CaloriesBurned.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'amount',
      'goal'
      //'created_at' throws error
    ]
  })
    .then(caloriesBurnedData => {
      console.log(caloriesBurnedData);
        res.json(caloriesBurnedData)})
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/:id', (req, res) => {
    CaloriesBurned.create({
      // date_text: req.body.date_text,
      // time_spent_text: req.body.time_spent_text,
      // exercise_type_text: req.body.exercise_type_text,
      amount: req.body.amount,
      goal: req.body.goal,
      user_id: req.params.id
    })
      .then(caloriesBurnedData => res.json(caloriesBurnedData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    CaloriesBurned.update({
      // date_text: req.body.date_text,
      // time_spent_text: req.body.time_spent_text,
      // exercise_type_text: req.body.exercise_type_text,
      amount: req.body.amount,
      goal: req.body.goal
    },

    {
    where: {
      id: req.params.id
    }

  })
  .then(caloriesBurnedData => res.json(caloriesBurnedData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  // router.delete('/:id', (req, res) => {
  //   CaloriesBurned.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(caloriesBurnedData => {
  //       if (!caloriesBurnedData) {
  //         res.status(404).json({ message: 'No calories burned found with this id!' });
  //         return;
  //       }
  //       res.json(caloriesBurnedData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  // });
  
  module.exports = router;