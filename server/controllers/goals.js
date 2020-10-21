const knex = require("./knex"); // the connectiononnection

module.exports = {
  getGoals() {
    return knex("goals");
  },
  addGoal(goalObject) {
    return knex("goals").insert(goalObject);
  },
  getGoal(user_id) {
    return knex("goals").where("user_id", user_id);
  },
};
