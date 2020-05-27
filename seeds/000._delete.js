
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('advertisements').del()
    .then(function () {
      return knex('advertisements').del();
    });
};
