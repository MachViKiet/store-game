const express = require('express');
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser)
router.get('/getAll-user', authMiddleware, userController.getAllUser)
router.get('/getDetails-user/:id', userController.getDetailsUser)

module.exports = router