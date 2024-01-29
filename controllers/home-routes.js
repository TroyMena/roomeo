const router = require('express').Router();
const { Survey, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// Get all surveys
router.get('/', async (req, res) => {
  try {
    if(req.session.loggedIn==undefined){
      res.render('login', { 
        logged_in: req.session.logged_in 
      });
    }
    else{
    const dbSurveyData = await Survey.findAll({
    });

    const surveys = dbSurveyData.map((survey) =>
    survey.get({ plain: true })
    );
    console.log(surveys)

    res.render('homepage', {
      surveys,
      loggedIn: req.session.loggedIn,
    });
  }} catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Josh added this, as the login button was not directing to login page when logged out. 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


// Get one survey
// Use the custom middleware before allowing the user to access the survey
router.get('/surveys/:id', withAuth, async (req, res) => {
  try {
    const dbSurveyData = await Survey.findByPk(req.params.id, {
    });
    const dbUserData = await User.findAll({
    });
    console.log(dbUserData)

    const surveys = dbSurveyData.get({ plain: true });
    const users = dbUserData.reduce((acc, user) => {
      acc[user.id] = user.get({ plain: true });
      return acc;
    }, {});
    res.render('gallery', { surveys, loggedIn: req.session.loggedIn,users: users[dbSurveyData.user_id] });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET survey page
router.get('/survey', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
    });
    const user = dbUserData.get({ plain: true });
    console.log(user)
    res.render('survey', { loggedIn: req.session.loggedIn,user});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
