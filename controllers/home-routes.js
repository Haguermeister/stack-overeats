const router = require('express').Router();
// Import the custom middleware
const withAuth = require('../utils/auth');

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
