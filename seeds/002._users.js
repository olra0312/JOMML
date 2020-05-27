
exports.seed = function(knex) {
  return knex('users').insert([      // password
    { username: 'adddmvv12qw', email: 'abc@123.dk', password: 'password' },
    { username: 'secvnduser', email: 'abc@1234.dk', password: 'mypassword' },
    { username: 'thidvduser', email: 'abc@12345.dk', password: 'thirdpassword' }
  ]);
};