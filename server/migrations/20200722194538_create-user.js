export const up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.unique("username");
    table.unique("email");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("first_name");
    table.string("last_name");
  });

export const down = (knex) => knex.schema.dropTable("users");
