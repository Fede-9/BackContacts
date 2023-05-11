const express = require('express')
const router = express.Router()
const { getContacto, getContactoById, addContacto, deleteContacto, updateContacto } = require('../controllers/contactos')



router.get('/', getContacto);

router.get('/:id', getContactoById)

router.post('/', addContacto)

router.delete('/:id', deleteContacto)

router.put('/:id', updateContacto)



module.exports = router;
// export default router;