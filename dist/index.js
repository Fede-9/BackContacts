"use strict";

var express = require('express');
var routerUsuarios = require('./routes/usuarios.js');
var routerContactos = require('./routes/contactos.js');
var app = express();
app.use(express.json());
app.use('/usuarios', routerUsuarios);
app.use('/contactos', routerContactos);
var PORT = 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, function () {
    console.log("Server is running in port ".concat(PORT));
  });
}
module.exports = app;