const router = require('express').Router();
const { CalorieIntake } = require('../../models');

router.get('/', (req, res) => {
  CalorieIntake.findAll()
    .then(calorieIntakeData => res.json(calorieIntakeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    CalorieIntake.create({
      date_text: req.body.date_text,
      meal_type_text: req.body.meal_type_text,
      calorie_amount_text: req.body.calorie_amount_text
    })
      .then(calorieIntakeData => res.json(calorieIntakeData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    CalorieIntake.update({
      date_text: req.body.date_text,
      meal_type_text: req.body.meal_type_text,
      calorie_amount_text: req.body.calorie_amount_text
    },

    {
    where: {
      id: req.params.id
    }

  })
  .then(calorieIntakeData => res.json(calorieIntakeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  router.delete('/:id', (req, res) => {
    CalorieIntake.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(calorieIntakeData => {
        if (!calorieIntakeData) {
          res.status(404).json({ message: 'No calorie intake found with this id!' });
          return;
        }
        res.json(calorieIntakeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;