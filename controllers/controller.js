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

function createNote(req, res, next){
  console.log('controller createNote');
  console.log(req.body);
  model.create.note(req.params.id, req.body)
  .then(result =>{
    res.json(result)
  })
}


function getDropdown(req, res, next){

    model.get.dropdown()
    .then(result => {
      res.json(result)

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
  console.log(req.params.id);
  model.get.student(req.params.id).then(result => {
    res.json(result)
  })
}

module.exports = {
  find,
  put,
  getStudent,
  getDropdown,
  createNote
}
