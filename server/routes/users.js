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

/* Get user */
router.get("/user/:username/:password", async (req, res) => {
  try {
    const { username, password } = req.params;
    const user = await db.getUser(username, password);
    res.status(200).json(user[0].id);
  } catch (err) {
    res.status(500).json({ error: "Unable to find user." });
  }
});

module.exports = router;
