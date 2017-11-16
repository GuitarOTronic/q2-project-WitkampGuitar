const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')
console.log('Hey fucker, router here');

router.get('/student/:id', controller.getStudent)
router.get('/student', controller.getDropdown)
router.get('/:id', controller.find)
router.get('/notes/:note_id', controller.getNote)
router.get(`/comments/:note_id`, controller.getComments)

router.post('/comments', controller.comments)
router.post('/student/:id', controller.createNote)

router.put('/:id', controller.put)

router.delete('/notes/:note_id', controller.destroyNote)
router.delete('/comments/:note_id', controller.destroyComments)
module.exports = router
