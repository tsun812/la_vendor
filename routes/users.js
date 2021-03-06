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
module.exports = (db) => {
  router.get("/:id", (req, res) => {
    req.session = req.params;
    const id = req.session.id;
    res.redirect("/");
  });
  router.get("/:id/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });
  return router;
};
