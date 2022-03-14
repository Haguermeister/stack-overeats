const router = require('express').Router();
const { CaloriesConsumed } = require('../../models');

router.get('/:userId', (req, res) => {
  CaloriesConsumed.findOne({
    where: {
      user_id: req.params.userId
    },
    attributes: [
      'id',
      'amount',
      'goal'
    ]
  })
    .then(caloriesConsumedData => res.json(caloriesConsumedData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/:userId', (req, res) => {
    CaloriesConsumed.create({
      // date_text: req.body.date_text,
      // meal_type_text: req.body.meal_type_text,
      amount: req.body.amount,
      goal: req.body.goal,
      user_id: req.params.userId
    })
      .then(caloriesConsumedData => res.json(caloriesConsumedData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/:userId', (req, res) => {
    CaloriesConsumed.update({
      // date_text: req.body.date_text,
      // meal_type_text: req.body.meal_type_text,
      amount: req.body.amount,
      goal: req.body.goal
    },

    {
    where: {
      user_id: req.params.userId
    }

  })
  .then(caloriesConsumedData => res.json(caloriesConsumedData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  // router.delete('/:id', (req, res) => {
  //   CaloriesConsumed.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(caloriesConsumedData => {
  //       if (!caloriesConsumedData) {
  //         res.status(404).json({ message: 'No calories consumed found with this id!' });
  //         return;
  //       }
  //       res.json(caloriesConsumedData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  // });
  
  module.exports = router;