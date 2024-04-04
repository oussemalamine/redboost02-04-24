// logoutRouter.js
const express = require("express");
const router = express.Router();

// Logout route
router.get("/logout", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Internal Server Error");
    } else {
      // Expire the session cookie
      res.clearCookie("sessionId");
      res.status(200).json({ message: "Logout successful" });
    }
  });
});

module.exports = router;