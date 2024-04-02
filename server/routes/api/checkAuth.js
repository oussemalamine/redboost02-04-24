// Import necessary modules
const express = require("express");
const router = express.Router();

// Middleware to check if user is authenticated
router.get("/login", (req, res) => {
  if (req.session && req.session.username) {
    // Assuming you have a 'user' object in the session when the user is authenticated
    return res.json({ authenticated: true, username: req.session.username });
  } else {
    return res.json({ authenticated: false });
  }
});
module.exports = router;
