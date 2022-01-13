/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const cookieSession = require("cookie-session");
const app = express();
app.use(
  cookieSession({
    name: "session",
    keys: ["abc", "def"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("../lib/sass-middleware");
const morgan = require("morgan");
const database = require("../database");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

module.exports = (db) => {
  router.post("/delete/:id", (req, res) => {
    //sql query to delete a record with id
    const id = req.params.id;
    const querystring = `
    DELETE
    FROM products
    WHERE id = $1
    `;
    db.query(querystring, [id])
      .then((result) => {
        return res.redirect("/");
      })
      .catch((e) => {
        return res.status(403).send("error occurs");
      });
  });

  router.post("/sell_an_item/upload", (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const url = req.body.url;
    const queryString = `
      INSERT INTO products (title, price, description,url_photo)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `;
    const values = [title, price, description, url];
    db.query(queryString, values)
      .then((result) => {
        return res.redirect("/");
      })
      .catch((e) => {
        return res.status(403).send("error occurs");
      });
  });
  return router;
};
