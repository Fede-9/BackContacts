const express = require('express')
const router = express.Router()
const { getContacto, getContactoById, addContacto, deleteContacto, updateContacto } = require('../controllers/contactos')
const {  validateUser } = require('../controllers/verifyUser.js')


router.get('/', validateUser, getContacto);

router.get('/:id', validateUser, getContactoById)

router.post('/', addContacto)

router.delete('/:id', validateUser, deleteContacto)

router.put('/:id', validateUser, updateContacto)



module.exports = router;
