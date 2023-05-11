const request = require('supertest')



describe('GET /usuarios', () => {

    test('should respond with a 200 status code', async (done) => {
        const response = await request(app).get('/usuarios').send()
        console.log(response)
        expect(response.status).toBe(200)
    }) 
  
})
