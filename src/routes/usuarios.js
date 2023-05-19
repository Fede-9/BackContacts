const express = require('express')
const router = express.Router()
const { getUsuario, getUsuarioById, addUsuario, deleteUsuario, updateUsuario, login } = require('../controllers/usuarios')
const { validateUser } = require('../controllers/verifyUser.js')


router.get('/', validateUser, getUsuario);

router.get('/:id', validateUser, getUsuarioById)

router.post('/', addUsuario)

router.delete('/:id', validateUser, deleteUsuario)

router.put('/:id', validateUser, updateUsuario)

router.post('/login', login)


module.exports = router;
