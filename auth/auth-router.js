const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../model/model')
const router = express.Router()

router.post('/register', async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await db.findBy({ username })

        if(user) {
            return res.status(409).json({
                message: "Username already taken, try again!"
            })
        }
        res.status(201).json(await db.add(req.body))
    }
    catch (err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    const authErr = {
        message: "Invalid credentials!"
    }
    try {
        const user = await db.findBy({ username: req.body.username })
        if(!user) {
            return res.status(401).json(authErr)
        }

        const passwordCheck = await bcrypt.compare(req.body.password, user.password)
        if(!passwordCheck) {
            return res.status(401).json(authErr)
        }

        const tokenPayload = {
            userId: user.id,
        }
        res.cookie('token', jwt.sign(tokenPayload, process.env.JWT_SECRET || 'something clever here'))
        res.json({
            username: user.username,
            id: user.id,
        })
    }
    catch (err) {
        next(err)
    }
})

router.get('/logout', async (req, res, next) => {
    try {
        res.clearCookie('token')
        res.status(204).json({
            message: "User was succesfully logged out."
        })
        res.redirect('/login')
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;