const request = require('supertest');
const app = require('../dist/index');
const jwt = require('jsonwebtoken'); // Importa la biblioteca jsonwebtoken

const Util = require('../src/utils/Util.js');


test('Eliminar usuario', (done) => {

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


        });
        
    done();
    
})