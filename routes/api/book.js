const axios = require('axios');
const keys = require('../../config/keys');
const passport = require('passport');
const amazon = require('amazon-product-api');
const get = require('lodash/get');
const User = require('../../models/User');

module.exports = app => {
  app.get('/api/book_search', async (req, res, next) => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          req.query.query
        }&maxResults=5&orderBy=relevance&key=${keys.googleBooksKey}`
      );
      // console.log(result.data.items[0].volumeInfo);
      res.send(result.data);
    } catch (e) {
      console.log(e);
    }
  });

  app.post(
    '/api/book_panel_submit',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const client = amazon.createClient({
        awsId: keys.amazonAccessKeyID,
        awsSecret: keys.amazonSecretAccessKey,
        awsTag: keys.amazonAssociateTag
      });
      try {
        const item = await client.itemSearch({
          keywords: req.body.bookName,
          author: req.body.bookAuthor,
          responseGroup: 'Images, ItemIds, Small',
          searchIndex: 'Books'
        });
        User.findOne({ _id: req.user._id }).then(user => {
          const newBook = {
            title: item[0].ItemAttributes[0].Title[0],
            author: item[0].ItemAttributes[0].Author[0],
            asin: item[0].ASIN,
            thumbnail: item[0].MediumImage
          };
          user.currentList.books.unshift(newBook)
          user.save().then(user => res.json(user))
        });
      } catch (error) {
        console.log(error.Error);
      }
    }
  );
};
