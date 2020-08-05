const goals = "goals";

const seed = (knex) =>
  knex(goals)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(goals).insert([
        { name: "read 5 books", end_date: "2020-10-31", user_id: 1 },
        { name: "sprout 2 more leaves", end_date: "2020-10-31", user_id: 2 },
        {
          name: "drink 2 more cups of water",
          end_date: "2020-10-31",
          user_id: 2,
        },
        { name: "become troll again", end_date: "2020-02-19", user_id: 3 },
      ]);
    });

exports.seed = seed;
