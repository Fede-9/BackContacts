const request = require('supertest');
const app = require('../dist/index');
const jwt = require('jsonwebtoken'); // Importa la biblioteca jsonwebtoken

const Util = require('../src/utils/Util.js');




describe('Chequeando usuarios', ()=>{

    test('Lista de usuarios', (done) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiQ2lyb0BnbWFpbC5jb20iLCJpYXQiOjE2ODY1OTIxNTEsImV4cCI6MTY4NjY3ODU1MX0.YzHytabymLcLGZ0hO8OYich0k2y1eW6-PqgqjlCErqA"; // Reemplaza <tu_token_aqui> con el valor real del token

        // Verifica la validez del token antes de realizar la solicitud
        try {
            const decodedToken = jwt.verify(token, 'claveSecreta'); // Reemplaza 'tu_secreto' con tu clave secreta para verificar el token
            // El token es válido
        } catch (error) {
            // El token es inválido
            done(new Error('Token inválido'));
        }

        request(app)
        .get('/usuarios')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function (err, res) {
            if (err) return done(err);

            // Aquí puedes realizar las comprobaciones adicionales según tus necesidades
            expect(Array.isArray(res.body.data)).toBe(true);

            done();
        });

    });

    test('Agregar usuario', (done)=>{

        const nuevoUsuario = { name: 'prueba1', email: 'prueba1@gmail.com', pass: 'prueba1'}
        
        request(app)
        .post('/usuarios')
        .set('Content-Type', 'application/json')
        .send(nuevoUsuario)
        .expect(201)
        .end((err, res) => {
            if (err) return done(err);
    
            // Aquí puedes agregar aserciones para verificar que el usuario fue agregado correctamente
            // Por ejemplo:
            expect(res.body.nombre).toBe(nuevoUsuario.nombre);
    
            done();
          })
    
    })

    test('Usuario por ID', (done) => {
      const usuarioId = '1'; // ID del usuario que deseas obtener
  
      request(app)
        .get(`/usuarios/${usuarioId}`) // Ruta para obtener un usuario por ID en tu aplicación
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
  
          // Aquí puedes agregar aserciones adicionales para verificar los datos del usuario obtenido
          // Por ejemplo:
          expect(res.body.name).toBe('prueba1');
          expect(res.body.email).toBe('prueba1@gmail.com');
  
          done();
        });
    });

    test('Actualizar un usuario existente', (done) => {

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiQ2lyb0BnbWFpbC5jb20iLCJpYXQiOjE2ODY1OTIxNTEsImV4cCI6MTY4NjY3ODU1MX0.YzHytabymLcLGZ0hO8OYich0k2y1eW6-PqgqjlCErqA"; // Reemplaza <tu_token_aqui> con el valor real del token

      // Verifica la validez del token antes de realizar la solicitud
      try {
          const decodedToken = jwt.verify(token, 'claveSecreta'); // Reemplaza 'tu_secreto' con tu clave secreta para verificar el token
          // El token es válido
      } catch (error) {
          // El token es inválido
          done(new Error('Token inválido'));
      }

      const datosActualizados = {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        pass: 'messi'
      };

      const usuarioId = '1'
  
      request(app)
        .put(`/usuarios/${usuarioId}`) // Ruta para actualizar un usuario por ID en tu aplicación
        .set('Content-Type', 'application/json')
        .send(datosActualizados)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
  
          // Aquí puedes agregar aserciones adicionales para verificar que el usuario fue actualizado correctamente
          // Por ejemplo:
          expect(res.body.mensaje).toBe('Usuario actualizado');
  
          done();
        });
    });

    test('Eliminar usuario', (done)=>{

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiQ2lyb0BnbWFpbC5jb20iLCJpYXQiOjE2ODY1OTIxNTEsImV4cCI6MTY4NjY3ODU1MX0.YzHytabymLcLGZ0hO8OYich0k2y1eW6-PqgqjlCErqA"; // Reemplaza <tu_token_aqui> con el valor real del token

      // Verifica la validez del token antes de realizar la solicitud
      try {
          const decodedToken = jwt.verify(token, 'claveSecreta'); // Reemplaza 'tu_secreto' con tu clave secreta para verificar el token
          // El token es válido
      } catch (error) {
          // El token es inválido
          done(new Error('Token inválido'));
      }
  
      const user = 1
  
      request(app)
        .delete(`/usuarios/${user}`) // Ruta para eliminar un usuario por ID en tu aplicación
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
  
          // Aquí puedes agregar aserciones adicionales para verificar que el usuario fue eliminado correctamente
          // Por ejemplo:
          expect(res.body.mensaje).toBe('Usuario eliminado');
  
          done();
      });
    })

})