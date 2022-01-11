// load .env data into process.env
// adding this
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
//const cookieSession = require('cookie-session');

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));
const usersRoutes = require("./routes/users");
app.use("/home", usersRoutes(db));
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
//app.use("/home", usersRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sell_an_item", (req, res) => {
  res.render("sell_an_item")
  })

app.get("/favourites", (req, res) => {
  res.render("favourites")
})

app.get("/")

// ------------------------------------ app.post ------------------------------


app.post("/sell_an_item/upload", async(req, res) => {
  const title = req.body.title
  const price = req.body.price
  const description = req.body.description
  const url = req.body.url
  console.log("req.body",req.body)
  const queryString = `
  INSERT INTO products (title, price, description,url_photo)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `;
  const values = [title, Number(price), description, url];
   await db.query(queryString, values)
    .then(result => {
      console.log("result",result.rows)
       res.redirect("/")
    })
    .catch((e) => {
      console.log(e)
      res.status(403).send("error occurs test") }

   )
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
