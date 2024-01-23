const router = require('express').Router();
const { User, Profile } = require('../../models');

// The `/api/profile` endpoint

router.get('/', (req, res) => {
    // find all profiles
    Profile.findAll({
      attributes: [
        'id',
        'name',
        'age'
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'username', 'email'],
        }
      ]
    })
      .then(dbProfileData => res.json(dbProfileData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    // find one profile by its `id` value
    Profile.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'age'
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'username', 'email'],
        }
      ]
    })
      .then(dbProfileData => {
        if (!dbProfileData){
            res.status(404).json({ error: 'Profile not found'});
        } else {
            res.json(dbProfileData);
        }
      }) 
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal server error'});
      });
  });