const express = require("express");
const router = express.Router();
const UserModel = require("../../database/models/AdminSchema");

router.get("/users", async (req, res) => {
  try {
    // Retrieve username from query parameters
    const { username } = req.query;

    // Query the database to get the user with the specified username
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
