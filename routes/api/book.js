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
      res.send(result.data);
    } catch (e) {
      console.log(e.data.error);
    }
  });

  /*
  api/book_panel_submit will
    1) take book title and author from client
    2) search amazon using title and author to fetch book asin and other details and store it in item variable
    3) if existing asin list in user's currentList books is >=10, return to client with error
    4) if asin already exists in user's currentList books asin list, return to client with error
    5) push item variable into user's existing array of currentList books
    6) update existing asin list which now includes new asin
    7) call amazon's similarItems method with this new asin list
    8) save all recommendations to recommendedList books array
    9) return to client with updated user object
  */
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
        const itemResults = await client.itemSearch({
          keywords: req.body.bookName,
          author: req.body.bookAuthor,
          responseGroup: 'Images, Small',
          searchIndex: 'Books'
        });

        const [item] = itemResults;

        if (!item) {
          return res
            .status(404)
            .send('Item not found for recommendation engine');
        }

        const title = get(item, 'ItemAttributes[0].Title[0]', '');
        const author = get(item, 'ItemAttributes[0].Author[0]', '');
        const asin = get(item, 'ASIN[0]', '');
        const thumbnail = get(
          item,
          'MediumImage[0].URL',
          'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_960_720.png'
        );

        const user = await User.findById(req.user.id);

        const existingAsinList = user.currentList.books.map(book => book.asin);

        if (existingAsinList.length >= 10) {
          return res.status(409).send('Reached max limit of 10 books');
        }

        console.log(existingAsinList, asin, existingAsinList.includes(asin));

        if (existingAsinList.includes(asin)) {
          console.log('Already exists');
          return res.status(409).send('Already exists');
        }

        const newBook = {
          title,
          author,
          asin,
          thumbnail
        };

        user.currentList.books.unshift(newBook);

        const newUserSearchSave = await user.save();

        const newAsinList = newUserSearchSave.currentList.books.map(
          book => book.asin
        );

        const similarItems = await client.similarityLookup({
          itemId: newAsinList.join(','),
          merchantId: 'Amazon',
          responseGroup: 'Images, Small',
          similarityType: 'Random'
        });

        const similarItemsBooks = similarItems
          .filter(item => item.ItemAttributes[0].ProductGroup[0] === 'Book')
          .map(item => {
            return {
              asin: get(item, 'ASIN[0]', ''),
              title: get(item, 'ItemAttributes[0].Title[0]', ''),
              author: get(item, 'ItemAttributes[0].Author', ''),
              thumbnail: get(
                item,
                'MediumImage[0].URL[0]',
                'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_960_720.png'
              )
            };
          });
        newUserSearchSave.recommendedList.books = similarItemsBooks;

        const newUserRecommendSave = await newUserSearchSave.save();

        res.send({
          currentList: newUserRecommendSave.currentList.books,
          recommendedList: newUserRecommendSave.recommendedList.books
        });
      } catch (error) {
        console.log(get(error, '[0].Error[0]', error));
      }
    }
  );

  app.get(
    '/api/get_user_books',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const user = await User.findById(req.user.id);
      res.send({
        currentList: user.currentList.books,
        recommendedList: user.recommendedList.books
      });
    }
  );
};
