const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  // Create a connection between recipes and specific user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // Refer to 'users' collection
    ref: 'users'
  },
  meal: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('recipe', RecipeSchema);