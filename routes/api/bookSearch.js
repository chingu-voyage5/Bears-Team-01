const axios = require('axios');
const keys = require('../../config/keys');

module.exports = app => {
  app.get('/api/book_search', async (req, res, next) => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          req.query.query
        }&maxResults=5&orderBy=relevance&key=${keys.googleBooksKey}`
      );
      result.data.items.forEach(item => {
        console.log(item.volumeInfo.imageLinks);
      });
      res.send(result.data);
    } catch (e) {
      console.log(e);
    }
  });
};
