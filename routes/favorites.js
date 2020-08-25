const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Favorites = require('../models/Favorites');

// @route   POST api/favorites
// @desc    Add to favorites
// @access  Private
router.post('/', auth, async (req, res) => {
  const { recipeID } = req.body;

  try {
    const newFavorite = new Favorites({
      user: req.user.id,
      recipeID
    });

    const favorite = await newFavorite.save();
    res.json(favorite);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;