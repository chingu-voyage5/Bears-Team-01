const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(keys.testKey);
});

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('connected'))
  .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
