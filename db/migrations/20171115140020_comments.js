
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments()
    table.text('comment').notNullable().defaultTo('')
    table.integer('student_id').notNullable()
    table.timestamps(true, true)
    table.integer('note_id').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
