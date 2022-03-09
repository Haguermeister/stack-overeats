const router = require('express').Router();
const { CalorieOutput } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  CalorieOutput.findAll({
    attributes: [
      'id',
      'date',
      'time_spent',
      'exercise_type',
    ]
  })
    .then(coPostData => {
      const posts = coPostData.map(post => post.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
router.get('/logout', (req, res) => {
  res.redirect('/');
});
router.get('/track', withAuth, (req, res) => {
  res.render('track', {
    loggedIn: req.session.loggedIn,
  });
  return;
});
router.get('/lookup', withAuth, (req, res) => {
  res.render('lookup', {
    loggedIn: req.session.loggedIn,
  });
  return;
});
router.get('/history', withAuth, (req, res) => {
  res.render('history', {
    loggedIn: req.session.loggedIn,
  });
  return;
});
module.exports = router;

module.exports = router;
