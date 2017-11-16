
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'This is student 1 note 1 comment 1', student_id: 11, note_id:11},
        {id: 2, comment: 'This is student 2 note 2 comment 2 ',student_id:12, note_id:12},
        {id: 3, comment: 'This is student 3 note 3 comment 3 ', student_id:13, note_id:13}
      ])
      .then(() => {
        return knex.raw(`SELECT setval('notes_id_seq', (SELECT MAX (id) FROM notes))`)
      })
    });
};
