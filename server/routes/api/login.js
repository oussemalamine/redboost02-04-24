const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (error, user, info) => {
    try {
      if (error) {
        return res.status(500).json({
          message: "Something is wrong logging in",
          error: error || "internal server errror",
        });
      }

      //req.login is provided by passport to serilize user id
      req.login(user, async (error) => {
        if (error) {
          res.status(500).json({
            message: "Something is wrong logging in",
            error: error || "internal server errror",
          });
        }
        req.session.username = user.username;
        return res.send({ user, info });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
