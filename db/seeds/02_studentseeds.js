
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Jimmy'},
        {id: 2, name: 'Frank'},
        {id: 3, name: 'Heather'}
      ])
      .then(() => {
        return knex.raw(`SELECT setval('students_id_seq', (SELECT MAX (id) FROM students))`)
      })
    });
};
