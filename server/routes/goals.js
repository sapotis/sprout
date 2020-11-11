const express = require("express");
const router = express.Router();
const db = require("../controllers/goals");

/* GET all goals */
router.get("/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const goals = await db.getGoals(user_id);
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

router.put("/", async (req, res) => {
  const {
    id,
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
    id,
    name,
    end_date,
    user_id,
    description,
    category,
    completed,
    frequency,
    parent_goal,
  };

  console.log("RECEIVED GOAL OBJECT OF : ", goalObject);

  try {
    const goals = await db.updateGoal(goalObject);
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: "Unable to update the goal." });
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    const goals = await db.deleteGoal(id);
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: "Unable to delete the goal." });
  }
});
module.exports = router;
