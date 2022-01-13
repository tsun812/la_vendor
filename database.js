const { Pool } = require('pg');
const db = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getProducts = function() {
  const queryString = `SELECT id, title, price, description, url_photo, user_id FROM products`;
  console.log("getProducts");
  return db.query(queryString)
    .then(result => {
      console.log("result", result.rows);
      return result.rows;
    })
    .catch((e) => {
      console.log(e);
    }
    )
}

const addToFavourite = (user_id, product_id) => {
  const queryString = `INSERT INTO favourites (user_id, product_id) VALUES($1, $2)`;
  return db.query(queryString, [user_id, product_id]);
}
exports.getProducts = getProducts;
exports.addToFavourite = addToFavourite;
