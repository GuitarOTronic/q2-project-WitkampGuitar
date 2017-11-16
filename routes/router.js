const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller')
console.log('Hey fucker, router here');

router.get('/student/:id', controller.getStudent)
router.get('/student', controller.getDropdown)
router.get('/:id', controller.find)
router.post('/student/:id', controller.createNote)
router.put('/:id', controller.put)

module.exports = router
