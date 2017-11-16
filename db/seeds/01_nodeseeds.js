exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([{
            id: 1,
            content: 'Jimmys a lil shit',
            student_id: 1
          },
          {
            id: 2,
            content: 'Keep up the practice',
            student_id: 1
          },
          {
            id: 3,
            content: 'Use your fingertips',
            student_id: 2
          },{
            id: 4,
            content: 'Use your fingertips to play with fire',
            student_id: 2
          },{
            id: 5,
            content: 'We tune because we care.',
            student_id: 3
          }
        ])
        .then(() => {
          return knex.raw(`SELECT setval('notes_id_seq', (SELECT MAX (id) FROM notes))`)
        })

    });
};
