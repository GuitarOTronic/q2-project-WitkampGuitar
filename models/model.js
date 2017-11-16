const knex = require('../db/connection')
console.log('model');


let get = {
  all() {
    return knex('notes')
  },
  student(id) {
    return knex('notes')
      .where('notes.student_id', id)
  },
  dropdown(){
    console.log('popStudent');
    return knex('students')
  }
}

let create = {
  note(id, content){
    return knex('notes')
    .where('notes.student_id', id)
    .insert({content: content.note, student_id: id})
  }
  //{content: note text, student_id: student id}
}
function find(id) {
  // console.log('model here');

  return knex('notes')
    .where({
      id
    })
    .first()
    .then(result => {
      return result
    })

}

function put(id, body) {
  body.title += '!'
  return knex('post')
    .where("id", '=', id)
    .update(body, '*')
}

module.exports = {
  find,
  put,
  get,
  create
}
