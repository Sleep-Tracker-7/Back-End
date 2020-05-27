const express = require('express')
const jwt = require('jsonwebtoken')
const db = require('../../model/model')
const router = express.Router()
const authenticate = require('../../auth/auth-middleware')

//post

router.post('/', async (req, res, next) => {
    try {
        const newSleepData = {
            ...req.body,
            user_id: jwt.decode(req.cookies.token).userId,
        }
        const data = await db.addSleepData(newSleepData)
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})

//get

router.get('/', async (req, res, next) => {
    try {
        const data = await db.getSleepData()
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})

//put 

router.put('/:id', async (req, res, next) => {
    try {
        const payload = {
            ...req.body,
            id: req.params.id,
        }
        const data = await db.updateSleepData(payload)
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})

//delete

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        await db.deleteSleepData(id)
        res.end()
    }
    catch (err){
        next(err)
    }
})

module.exports = router;