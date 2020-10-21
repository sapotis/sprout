const knex = require("./knex"); // the connectiononnection

module.exports = {
  getUsers() {
    return knex("users");
  },
  getUser(username, password) {
    return knex.from("users").select("id").where({ username, password });
  },
};
