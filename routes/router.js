const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')


router.get('/students/:id', controller.getStudent)
router.get('/students', controller.getDropdown)
router.get('/:id', controller.find)
router.get('/notes/:note_id', controller.getNote)
router.get(`/comments/:note_id`, controller.getComments)

router.post('/comments', controller.comments)
router.post('/students/:id', controller.createNote)
router.post('/students', controller.createStudent)

router.put('/:id', controller.put)
router.put('/notes/:note_id', controller.editNote)
router.delete('/notes/:note_id', controller.destroyNote)
router.delete('/comments/:note_id', controller.destroyComments)
module.exports = router
