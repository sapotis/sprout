export const up = (knex) =>
  knex.schema.createTable("goals", (table) => {
    table.increments("id");
    table.unique("user_id");
    table.unique("parent_goal");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("name");
    table.string("description");
    table.string("category");
    table.date("end_date");
    table.boolean("completed");
    table.string("frequency");
  });

export const down = (knex) => knex.schema.dropTable("goals");
