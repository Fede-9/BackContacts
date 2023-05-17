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
router.get('/', getUsuario);
router.get('/:id', getUsuarioById);
router.post('/', addUsuario);
router["delete"]('/:id', deleteUsuario);
router.put('/:id', updateUsuario);
router.post('/login', login);
module.exports = router;