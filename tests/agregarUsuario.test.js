const request = require('supertest');
const app = require('../dist/index');
const jwt = require('jsonwebtoken'); // Importa la biblioteca jsonwebtoken

const Util = require('../src/utils/Util.js');

test('Agregar usuario', (done) => {

    const nuevoUsuario = { name: 'prueba1', email: 'prueba1@gmail.com', pass: 'prueba1' }

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
                

        })

    done();

})
