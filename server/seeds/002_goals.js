const goals = "goals";

export function seed(knex) {
  // Deletes ALL existing entries
  return knex(goals)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(goals).insert([]);
    });
}
