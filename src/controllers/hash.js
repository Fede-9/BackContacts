const bcrypt = require('bcrypt')

const saltRounds = 10



const generarHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};


const compararHash = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


module.exports = {
    generarHash,
    compararHash
}


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
