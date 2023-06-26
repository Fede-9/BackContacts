const request = require('supertest');
const app = require('../dist/index');
const jwt = require('jsonwebtoken'); // Importa la biblioteca jsonwebtoken

const Util = require('../src/utils/Util.js');


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

           
        });
        
    done();

});