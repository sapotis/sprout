const express = require("express");
const router = express.Router();
const db = require("../controllers/goals");

/* GET all goals */
router.get("/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const goals = await db.getGoal(user_id);
    console.log("GOALSS", goals);
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: "Unable to get the goal(s)." });
  }
});

/* POST a goal */
router.post("/", async (req, res) => {
  const {
    name,
    end_date,
    user_id,
    description,
    category,
    completed,
    frequency,
    parent_goal,
  } = req.body;

  const goalObject = {
    name,
    end_date,
    user_id,
    description,
    category,
    completed,
    frequency,
    parent_goal,
  };

  try {
    const goals = await db.addGoal(goalObject);
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: "Unable to post the goal." });
  }
});

module.exports = router;
