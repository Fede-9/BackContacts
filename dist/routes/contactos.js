"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/contactos'),
  getContacto = _require.getContacto,
  getContactoById = _require.getContactoById,
  addContacto = _require.addContacto,
  deleteContacto = _require.deleteContacto,
  updateContacto = _require.updateContacto;
router.get('/', getContacto);
router.get('/:id', getContactoById);
router.post('/', addContacto);
router["delete"]('/:id', deleteContacto);
router.put('/:id', updateContacto);
module.exports = router;