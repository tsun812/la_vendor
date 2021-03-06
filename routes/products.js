/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');
const app = express();
app.use(cookieSession({
  name: 'session',
  keys: ["abc", "def"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
module.exports = (db) => {
  router.post("/delete/:id", (req, res) => {
    //sql query to delete a record with id
   const id = req.params.id;
     const querystring = `
    DELETE
    FROM products
    WHERE id = $1 
    `
    db.query(querystring, [id])
    .then(result => {

      return res.redirect("/")
    })
    .catch((e) => {
      return res.status(403).send("error occurs") }
    )
  });

  router.post("/sell_an_item/upload", (req, res) => {
  const title = req.body.title
  const price = req.body.price
  const description = req.body.description
  const url = req.body.url
  const queryString = `
  INSERT INTO products (title, price, description,url_photo)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `;
  const values = [title, Number(price), description, url];
    db.query(queryString, values)
    .then(result => {
       res.redirect("/")
    })
    .catch((e) => {
      res.status(403).send("error occurs")
    }
   )
  })

  router.post("/marksold", (req, res) => {
    const userId = req.body.product_id;
    const queryString = `
    UPDATE products 
    SET available_status =  $1
    WHERE id = $2
    `;
    const values = ['FALSE', userId];
      db.query(queryString, values)
      .then(result => {
         res.redirect("/")
      })
      .catch((e) => {
        res.status(403).send("error occurs")
      }
     )
    })

    return router;
  }

