const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    type: String
  },
  owned: {
    books: [
      {
        title: {
          type: String,
          required: true
        },

        id: {
          type: String,
          required: true
        }
      }
    ],
    movies: [
      {
        title: {
          type: String,
          required: true
        },

        id: {
          type: String,
          required: true
        }
      }
    ],
    tv: [
      {
        title: {
          type: String,
          required: true
        },

        id: {
          type: String,
          required: true
        }
      }
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
