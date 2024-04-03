const express = require("express");
const router = express.Router();
const User = require("../../database/models/AdminSchema");

// Multer middleware for handling multipart/form-data (used for file uploads)
const multer = require("multer");
const upload = multer();

// Update user route
router.put("/users/:userId", upload.single("image"), async (req, res) => {
  const { userId } = req.params;
  const userDataToUpdate = req.body;
  const imageData = req.file; // Uploaded image data

  try {
    // Find the user by ID
    let user = await User.findById(userId);

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    user = await User.findByIdAndUpdate(userId, userDataToUpdate, {
      new: true,
    });

    // Save image data if uploaded
    if (imageData) {
      user.image.data = imageData.buffer;
      user.image.contentType = imageData.mimetype;
      await user.save();
    }

    // Return the updated user
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
