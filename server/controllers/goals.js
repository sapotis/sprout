const knex = require("./knex"); // the connectiononnection

module.exports = {
  getGoals() {
    return knex("goals");
  },
  addGoal(goalObject) {
    return knex("goals").insert(goalObject);
  },
};
