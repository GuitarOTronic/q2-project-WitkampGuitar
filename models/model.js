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
    return knex('students')
  },
  comments(note_id){
    return knex('comments')
    .where('comments.note_id', note_id)
  },
  note(note_id){
    console.log(note_id);
    return knex('notes')
    .where('notes.id', note_id)
  }
}

let create = {
  note(id, content){
    return knex('notes')
    .where('notes.student_id', id)
    .insert({content: content.note, student_id: id})
  },
  comments(body){
    return knex('comments')
    .insert({comment:body.comment, note_id:body.note_id, student_id:body.student_id})
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

function destroyNote(note_id){
  return knex('notes')
  .where('notes.id', note_id)
  .del()
  .then(result=>{
    return result
  })
}

function destroyComments(note_id){
  console.log('hey model');
  return knex('comments')
  .where('comments.note_id', note_id)
  .del()
  .then(result=>{
    return result
  })
}
module.exports = {
  find,
  put,
  get,
  create,
  destroyNote,
  destroyComments
}
