const express = require("express");
const router = express.Router();
const db = require("../controllers/users");

/* GET all users */
router.get("/", async (req, res, next) => {
  try {
    await db.getUsers().then((users) => {
      res.status(200).json(users);
    });
  } catch (err) {
    res.status(500).json({ error: "Unable to get all user." });
  }
});

module.exports = router;
