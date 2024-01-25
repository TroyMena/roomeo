//Josh added this file to create Survey data in the database
const router = require('express').Router();
const { User, Survey } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/surveys` endpoint
router.get('/', async (req, res) => {
  try {
    const surveyData = await Survey.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(surveyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create new Survey
router.post('/', withAuth, async (req, res) => {
  console.log("HELOOOOOOOOOOOOOOOO")
  try {
    console.log(req.body)
    const newSurvey = await Survey.create({
      ...req.body,
      //user_id: req.session.user_id,
    });
    console.log(newSurvey)
    res.status(200).json(newSurvey);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const surveyData = await Survey.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!surveyData) {
      res.status(404).json({ message: 'No survey found with this id!' });
      return;
    }

    res.status(200).json(surveyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
