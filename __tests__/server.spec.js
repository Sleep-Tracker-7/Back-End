const supertest = require('supertest')
const server = require('../api/server')



describe('Server tests', () => {
    it('Runs and returns a 200 at /', async () => {
        const status = 200
        const res = await supertest(server).get('/')

        expect(res.statusCode).toBe(status)
        expect(res.type).toBe('application/json')
        expect(res.body.message).toBe('Welcome!')
    })

    it('Returns 404 else', async () => {
        const failed = 404
        const res = await supertest(server).get('/wrongpath')

        expect (res.statusCode).toBe(failed)
    })
})
