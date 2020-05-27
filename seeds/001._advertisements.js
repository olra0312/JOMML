
exports.seed = function(knex) {
  return knex('advertisements').insert([
     { bookName: "test123" },
     { userId: 'user_id', user_id: users[0].id },
     { author: "test" },
     { publisher: "tester"},
     { isbn: 12345678 },
     { edition: 3 },
     { price: 200 },
     {condition: "testing" }
  ]);
};