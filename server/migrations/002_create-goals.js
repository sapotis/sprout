exports.up = (knex) =>
  knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("name");
    table.string("description");
    table.string("category");
    table.date("end_date");
    table.boolean("completed");
    table.string("frequency");
    table.integer("parent_goal");
    table.foreign("parent_goal").references("goals.id");
    table.unique(["id", "user_id", "parent_goal"]);
  });

exports.down = (knex) => knex.schema.dropTable("goals");
