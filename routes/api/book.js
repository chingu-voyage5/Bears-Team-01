const axios = require('axios');
const keys = require('../../config/keys');
const passport = require('passport');
module.exports = app => {
  app.get('/api/book_search', async (req, res, next) => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          req.query.query
        }&maxResults=5&orderBy=relevance&key=${keys.googleBooksKey}`
      );
      res.send(result.data);
    } catch (e) {
      console.log(e);
    }
  });

  app.post(
    '/api/book_panel_submit',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      console.log(req.body);
    }
  );
};
