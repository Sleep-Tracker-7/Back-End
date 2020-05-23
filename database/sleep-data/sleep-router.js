const express = require('express')
const db = require('../../model/model')
const router = express.Router()

//post

router.post('/', async (req, res, next) => {
    try {
        const newSleepData = req.body
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
        const payload = req.body
        console.log(payload)
        const data = await db.updateSleepData(payload)
        console.log(data)
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})
module.exports = router;