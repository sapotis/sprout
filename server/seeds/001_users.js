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
          password: "dictatious",
          first_name: "Blinkous",
          last_name: "Galadrigal",
        },
        {
          username: "sproutling",
          email: "sproutling@blooming.com",
          password: "leaflet",
          first_name: "Sprout",
        },
        {
          username: "AAARRRGGHH",
          email: "AAARRRGGHH@trollmarket.info",
          password: "pacifist",
        },
      ]);
    });

exports.seed = seed;
