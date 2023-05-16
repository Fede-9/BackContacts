"use strict";

var bcrypt = require('bcrypt');
var saltRounds = 10;
var generarHash = function generarHash(password) {
  return new Promise(function (resolve, reject) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};
var compararHash = function compararHash(password, hash) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
module.exports = {
  generarHash: generarHash,
  compararHash: compararHash
};

// (async () => {
//   const password = 'contraseña123';
//   try {
//     const hash = await generarHash(password);
//     console.log('Hash generado:', hash);
//     const resultado = await compararHash(password, hash);
//     console.log('Las contraseñas coinciden:', resultado);
//   } catch (error) {
//     console.error(error);
//   }
// })();