const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({
  // Create a connection between favorites and specific user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // Refer to 'users' collection
    ref: 'users'
  },
  recipeID: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('favorite', FavoriteSchema);