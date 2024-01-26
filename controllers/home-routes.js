const router = require('express').Router();
const { Survey, User, Gallery, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
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



// // GET all galleries for homepage
// router.get('/', async (req, res) => {
//   try {
//     if(req.session.loggedIn==undefined){
//       res.render('login', { 
//         logged_in: req.session.logged_in 
//       });
//     }
//     else{
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

//     res.render('homepage', {
//       galleries,
//       loggedIn: req.session.loggedIn,
//     });
//   }} catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/gallery/:id', withAuth, async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/surveys/:id', withAuth, async (req, res) => {
  try {
    const dbSurveyData = await Survey.findByPk(req.params.id, {
    });

    const surveys = dbSurveyData.get({ plain: true });
    console.log("YESSS")
    console.log(surveys)
    res.render('gallery', { surveys, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET survey page
router.get('/survey', withAuth, async (req, res) => {
  try {
    res.render('survey', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
