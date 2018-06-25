const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookStructure = {
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  asin: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String
  }
};

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  icon: {
    type: String,
    require: true
  },
  owned: {
    books: [bookStructure]
  },
  currentList: {
    books: [bookStructure]
  },
  recommendedList: {
    books: [bookStructure]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
