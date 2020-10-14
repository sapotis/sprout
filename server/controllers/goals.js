const knex = require("./knex"); // the connectiononnection

module.exports = {
  getGoals() {
    return knex("goals");
  },
  addGoal(name, end_date, user_id) {
    return knex("goals").insert({ name, end_date, user_id });
  },
};
