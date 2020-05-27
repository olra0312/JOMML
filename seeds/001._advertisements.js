
exports.seed = function(knex) {

  return knex('users').select().then(users => {
    return knex('advertisements').insert([
      {book_name: "test123",
       user_id: users[0].id,  
       author: "test",
       publisher: "tester",
       isbn: 12345678,
       edition: 3,
       price: 200,
       condition: "testing"
      },
      {book_name: "wetwwttet",
      user_id: users[4].id,  
      author: "werrrr",
      publisher: "testeffwer",
      isbn: 12383333,
      edition: 342,
      price: 2004,
      condition: "t234weng"
      },




      //{ user_id: users[1].user_id },
      //{ author: "test" },
      //{ publisher: "tester"},
      //{ isbn: 12345678 },
      //{ edition: 3 },
      //{ price: 200 },
      //{condition: "testing" }
   ]);
  })
};