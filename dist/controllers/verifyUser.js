"use strict";

var validateUser = function validateUser(req, res, next) {
  try {
    var auth = req.headers.authorization;
    var listaAuth = auth.split(' ');
    var token = listaAuth[1];
    if (!token) {
      res.status(403).json({
        message: " Acceso denegado "
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  validateUser: validateUser
};