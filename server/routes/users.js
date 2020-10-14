const express = require("express");
const router = express.Router();
const db = require("../controllers/users");

/* GET all users */
router.get("/", async (req, res) => {
  try {
    const users = await db.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Unable to get all of the users." });
  }
});

module.exports = router;
