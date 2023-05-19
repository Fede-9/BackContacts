"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/usuarios'),
  getUsuario = _require.getUsuario,
  getUsuarioById = _require.getUsuarioById,
  addUsuario = _require.addUsuario,
  deleteUsuario = _require.deleteUsuario,
  updateUsuario = _require.updateUsuario,
  login = _require.login;
var _require2 = require('../controllers/verifyUser.js'),
  validateUser = _require2.validateUser;
router.get('/', validateUser, getUsuario);
router.get('/:id', validateUser, getUsuarioById);
router.post('/', addUsuario);
router["delete"]('/:id', validateUser, deleteUsuario);
router.put('/:id', validateUser, updateUsuario);
router.post('/login', login);
module.exports = router;