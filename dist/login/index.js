"use strict";

var jwt = require('jsonwebtoken');
var CLAVE_PRIVADA = 'claveSecreta';
var TOKEN_EXPIRATION = '24h';

// const payload = {
//     user: 'info@itecriocuarto.org'
// }

// generar el token
var generatetoken = function generatetoken(payload) {
  return jwt.sign({
    payload: payload
  }, CLAVE_PRIVADA, {
    expiresIn: TOKEN_EXPIRATION
  });
};

// let token = generatetoken(payload)
// console.log(token)

// comprobar si el token es valido - mostrar la info que contiene el token
var decodeToken = function decodeToken(token) {
  try {
    var decode = jwt.verify(token, CLAVE_PRIVADA);
    return decode;
  } catch (error) {
    return null;
  }
};

// console.log(decodeToken(token))

module.exports = {
  generatetoken: generatetoken,
  decodeToken: decodeToken
};