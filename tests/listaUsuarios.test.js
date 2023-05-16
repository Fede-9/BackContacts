const request = require('supertest')
const app = require('../dist/index')

import { Util } from '../src/utils/Util'


beforeAll(async () => {
    // borrar todos los registros de usuarios
    await Util.removeAllUser()
})


test('Agregar un usuario', async () => {
    const prueba = { name: 'prueba1', email: 'prueba1@gmail.com', pass: 'prueba1'}
    await request(app)
    .post('/usuarios')
    .set('Content-Type', 'application/json')
    .send(prueba)
    .expect(201)

    const registro = await Util.existUser(res.body.data.id)
    expect(registro.name).toBe(true)

    done()
        
})


test('Agregar de nuevo el mismo usuario', async () => {
    const prueba = { name: 'prueba1', email: 'prueba1@gmail.com', pass: 'prueba1'}
    await request(app)
    .post('/usuarios')
    .set('Content-Type', 'application/json')
    .send(prueba)
    .expect(400)

    // const registro = await Util.getUserById(res.body.data.id)
    // expect(registro.name).toBe(prueba.name)
})


test('Lista de usuarios', (done) => {
    request(app)
    .get('/usuarios')
    .expect(201)
    .end(function (err, res) {
        if (err) return done(err)
        expect(Array.isArray(res.body.data)).toBe(true)
        done()
    })
})
