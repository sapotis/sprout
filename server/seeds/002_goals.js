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
          end_date: "October 10 00:00:00 2020 EST",
          user_id: 2,
        },
        { name: "become troll again", end_date: "2020-02-19", user_id: 3 },
        {
          name: "read newspaper",
          end_date: "November 19 19:19:00 2020 EDT",
          user_id: 1,
          parent_goal: 1,
        },
        {
          name: "drive human automobile",
          end_date: "September 19 00:00:00 2020 EDT",
          user_id: 1,
        },
      ]);
    });

exports.seed = seed;
