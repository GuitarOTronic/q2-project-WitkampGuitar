exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
    table.increments()
    table.text('content').notNullable().defaultTo('')
    table.integer('student_id').notNullable()
    table.timestamps(true, true)
    //table.foreign('student_id').refrences('students')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
