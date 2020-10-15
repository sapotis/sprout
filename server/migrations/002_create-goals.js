const up = (knex) =>
  knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("name").notNullable();
    table.string("description");
    table.string("category");
    table.date("end_date").notNullable();
    table.boolean("completed").defaultTo(false);
    table.string("frequency");
    table
      .integer("parent_goal")
      .references("goals.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

const down = (knex) => knex.schema.dropTable("goals");

module.exports = {
  up,
  down,
};
