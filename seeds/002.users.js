
exports.seed = function(knex) {
  return knex('users').insert([      // password
    { username: 'adddmin2312qw', email: 'abc@123.dk', password: 'password' },
    { username: 'secd44onduser', email: 'abc@1234.dk', password: 'mypassword' },
    { username: 'thidffrduser', email: 'abc@12345.dk', password: 'thirdpassword' }
  ]);
};