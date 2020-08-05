const users = "users";

const seed = (knex) =>
  knex(users)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(users).insert([
        {
          username: "blinky",
          email: "blinky@trollmarket.info",
          first_name: "Blinkous",
          last_name: "Galadrigal",
        },
        {
          username: "sproutling",
          email: "sproutling@blooming.com",
          first_name: "Sprout",
        },
        {
          username: "AAARRRGGHH",
          email: "AAARRRGGHH@trollmarket.info",
        },
      ]);
    });

exports.seed = seed;
