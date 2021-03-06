
exports.up = function(knex) {
  return knex.schema
  .createTable("users", table => {
    table.increments("id");
    table.string("first_name");
    table.string("last_name");
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("email");
    table.bigInteger("phone_number");
    table.string("address");
    table.integer("zip_code");
    table.string("city");
  })

  .createTable("advertisements", table => {
    table.increments("id");
    table.string("book_name").notNullable();

    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');

    table.string("author").notNullable();
    table.string("publisher");
    table.integer("isbn");
    table.integer("edition");
    table.integer("price").notNullable();
    table.string("condition");
  })
};

exports.down = function(knex) {
  return knex.schema
  
  .dropTableIfExists("users")
  .dropTableIfExists("advertisements")
};
 