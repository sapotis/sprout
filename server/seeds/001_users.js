const users = "users";

export function seed(knex) {
  // Deletes ALL existing entries
  return knex(users)
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
          username: "sproutling",
          email: "sproutling2@blooming.com",
        },
        {
          username: "AAARRRGGHH",
          email: "AAARRRGGHH@trollmarket.info",
        },
      ]);
    });
}
