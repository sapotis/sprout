const up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("first_name");
    table.string("last_name");
    table.unique(["id", "username", "email"]);
  });

const down = (knex) => knex.schema.dropTable("users");

module.exports = {
  up,
  down,
};
