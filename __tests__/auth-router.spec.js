require('dotenv').config
const supertest = require('supertest')
const server = require('../api/server')
const db = require('../database/dbconfig')

beforeAll(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})


describe('Auth tests', () => {
    it('Allows a user to register', async () => {
        const data = { username: 'Asu', password: 'pass' }
        const res = await supertest(server).post('/auth/register').send(data)
        expect(res.statusCode).toBe(201)
    })
    it('Fails new user to register', async () => {
        const data = { username: 'Asu', password: 'pass' }
        const res = await supertest(server).post('/auth/register/register').send(data)
        expect(res.statusCode).toBe(404)
    })
    it('Allows user to login', async () => {
        const data = { username: 'Asu', password: 'pass' }
        const res = await supertest(server).post('/auth/login').send(data)
        expect(res.statusCode).toBe(200)
    })
    it('Does not allow user to login if not registered', async () => {
        const data = { username: 'RandomUser', pass: 'pass' }
        const res = await supertest(server).post('/auth/login').send(data)
        expect(res.statusCode).toBe(401)
    })
    it('Allows user to logout', async () => {
        const res = await supertest(server).get('/auth/logout')
        expect(res.statusCode).toBe(204)
    })
    it('Fails to allow user to logout', async () => {
        const res = await supertest(server).post('/auth/logout/logout')
        expect(res.statusCode).toBe(404)
    })
    it('Fails to allow user to logout if not at /logout', async () => {
        const res = await supertest(server).get('/auth/logout/logout')
        expect(res.statusCode).toBe(404)
    })
})