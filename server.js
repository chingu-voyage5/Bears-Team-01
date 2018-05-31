const express = require('express');
const morgan = require('morgan');
const keys = require('./config/keys');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(keys.testKey);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
