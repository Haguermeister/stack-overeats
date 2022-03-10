const router = require('express').Router();
const { CalorieOutput } = require('../../models');

router.get('/', (req, res) => {
  CalorieOutput.findAll()
    .then(calorieOutputData => res.json(calorieOutputData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    CalorieOutput.create({
      date_text: req.body.date_text,
      time_spent_text: req.body.time_spent_text,
      exercise_type_text: req.body.exercise_type_text,
      calories_burnt_text: req.body.calories_burnt_text
    })
      .then(calorieOutputData => res.json(calorieOutputData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    CalorieOutput.update({
      date_text: req.body.date_text,
      time_spent_text: req.body.time_spent_text,
      exercise_type_text: req.body.exercise_type_text,
      calories_burnt_text: req.body.calories_burnt_text
    },

    {
    where: {
      id: req.params.id
    }

  })
  .then(calorieOutputData => res.json(calorieOutputData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  router.delete('/:id', (req, res) => {
    CalorieOutput.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(calorieOutputData => {
        if (!calorieOutputData) {
          res.status(404).json({ message: 'No calorie output found with this id!' });
          return;
        }
        res.json(calorieOutputData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;