const knex = require("./knex"); // the connectiononnection

module.exports = {
  getUsers() {
    return knex("users");
  },
};
