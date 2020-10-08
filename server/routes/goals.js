const express = require("express");
const router = express.Router();
const db = require("../controllers/goals");

/* GET all users */
router.get("/", async (req, res, next) => {
  // And insert something like this instead
  // response.status(200).send(getUsers());
  try {
    await db.getGoals().then((users) => {
      res.status(200).json(users);
    });
  } catch (err) {
    res.status(500).json({ error: "Unable to get all user." });
  }
});

router.post("/", async (req, res, next) => {
  const { name, end_date, user_id } = req.body;
  console.log("routes ", req.body);
  try {
    await db.addGoal(name, end_date, user_id).then((goals) => {
      res.status(200).json(goals);
    });
  } catch (err) {
    res.status(500).json({ error: "Unable to get all user." });
    console.log(err);
  }
});

module.exports = router;
