const knex = require("./knex"); // the connectiononnection

module.exports = {
  addGoal(goalObject) {
    return knex("goals").insert(goalObject);
  },
  getGoals(user_id) {
    return knex("goals").where("user_id", user_id);
  },
  updateGoal(goalObject) {
    return knex("goals").where("id", goalObject.id).update(goalObject);
  },
};
