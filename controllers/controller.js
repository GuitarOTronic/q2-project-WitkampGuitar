const model = require('../models/model')
console.log('controller')

function find(req, res, next) {

  model.find(req.params.id)
    .then(result => {
      res.json(
        result
      )
    })
}
function comments(req, res, next){

  model.create.comments(req.body)
  .then(result=>{
    res.json({result})
  })
}
function createNote(req, res, next){

  model.create.note(req.params.id, req.body)
  .then(result =>{
    res.json(result)
  })
}

function getComments(req, res, next){
  model.get.comments(req.params.note_id)
  .then(result=>{
    res.json(result)
  })
}



function getDropdown(req, res, next){

    model.get.dropdown()
    .then(result => {
      res.json(result)

    })
}

function getNote(req, res, next){
  model.get.note(req.params.note_id)
  .then(result=>{
    res.json({result})
  })
}

function put(req, res, next) {
  model.put(req.params.id, req.body).then(result => {
    res.json({
      result
    })
  })
}

function getStudent(req, res, next) {

  model.get.student(req.params.id).then(result => {
    res.json(result)
  })
}

function destroyNote(req, res, next){
  model.destroyNote(req.params.note_id)
  .then(result=>{
    res.json({result})
  })
}

function destroyComments(req, res, next){
  console.log('controller bleh');
  model.destroyComments(req.params.note_id)
  .then(result=>{
    res.json({result})
  })
}
module.exports = {
  find,
  put,
  getStudent,
  getDropdown,
  createNote,
  comments,
  getComments,
  getNote,
  destroyNote,
  destroyComments
}
