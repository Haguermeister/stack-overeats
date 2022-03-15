const router = require('express').Router();
// Import the custom middleware
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {

  res.render('homepage', {
    loggedIn: req.session.loggedIn,
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
router.get('/profile', withAuth, (req, res) => {
  res.render('profile', {
    loggedIn: req.session.loggedIn,
  });
  return;
});


module.exports = router;
