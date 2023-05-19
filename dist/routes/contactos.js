"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/contactos'),
  getContacto = _require.getContacto,
  getContactoById = _require.getContactoById,
  addContacto = _require.addContacto,
  deleteContacto = _require.deleteContacto,
  updateContacto = _require.updateContacto;
var _require2 = require('../controllers/verifyUser.js'),
  validateUser = _require2.validateUser;
router.get('/', validateUser, getContacto);
router.get('/:id', validateUser, getContactoById);
router.post('/', addContacto);
router["delete"]('/:id', validateUser, deleteContacto);
router.put('/:id', validateUser, updateContacto);
module.exports = router;