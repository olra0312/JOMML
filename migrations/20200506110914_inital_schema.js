
exports.up = function(knex) {
  return knex.schema
  .createTable("users", table => {
    table.string("first_name")
    table.string("last_name")
    table.increments("id")
    table.string("username").unique().notNullable()
    table.string("password").notNullable()
    table.string("email")
    table.bigInteger("phone_number")
    table.string("address")
    table.integer("zip_code")
    table.string("city")
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users")
};
