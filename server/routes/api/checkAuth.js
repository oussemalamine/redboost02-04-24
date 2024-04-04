// Import necessary modules
const express = require("express");
const router = express.Router();

// Middleware to check if user is authenticated
router.post("/checkAuth", (req, res) => {
  if (!req.session) {
    return res.json({ authenticated: false });
  }

  const { username, loginTime, cookie } = req.session;
  const expiryTime = cookie.expires || "Unknown";

  return res.json({
    authenticated: true,
    username,
    loginTime: loginTime || "Unknown",
    expiryTime,
  });
});

module.exports = router;
