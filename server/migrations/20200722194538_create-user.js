exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username");
    table.string("email");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("first_name");
    table.string("last_name");
    table.unique(["id", "username", "email"]);
  });

exports.down = (knex) => knex.schema.dropTable("users");
