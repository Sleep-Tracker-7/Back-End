const express = require('express')
const supertest = require('supertest')
const server = require('../api/server')
const db = require('../database/dbconfig')
const sinon = require('sinon')
const auth = require('../auth/auth-middleware')


beforeAll(async () => {
    await db.seed.run()
})


afterAll(async () => {
    await db.destroy()
})

describe('Sleep Data tests', () => {
    it('Fails to get sleep data', async () => {
        const res = await supertest(server).get('/sleep')
        expect (res.statusCode).toBe(401)
    })


    it('Fails to get sleep data when tried from wrong path', async () => {
        const res = await supertest(server).get('/sleepdata')
        expect (res.statusCode).toBe(404)
    })
    it('Fails to post new sleep data', async () => {
        const data = {
            user_id: 1,
            start: '2020-05-29 20:00:00',
            end: '2020-05-30 00:00:00',
            hours: 4,
            score_wake: 0.25,
            score_day: 0.25,
            score_night: 0.25
        }
        const res = await supertest(server).post('/sleep').send(data)
        expect (res.statusCode).toBe(401)
    })
})