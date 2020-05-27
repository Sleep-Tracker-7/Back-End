const express = require('express')
const bcrypt = require('bcryptjs')
const db = require('../database/dbconfig')

async function findBy(filter) {
	return db('users')
		.select('id', 'username', 'password')
        .where(filter)
        .first()
}

async function findById(id) {
	return db('users')
		.select('id', 'username')
		.where({ id })
		.first()
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14)

    const [id] = await db('users').insert(user)
    return findById(id)
}

async function addSleepData(sleep_data) {
    return db('sleep_data')
        .insert(sleep_data)
        .then(id => {
            return findById(id[0])
        });
}

async function getSleepData() {
    return db('sleep_data')
}

async function updateSleepData(changes) {
    return db('sleep_data')
        .where('id', changes.id)
        .update(changes)
}

async function deleteSleepData(id) {
    return db('sleep_data')
        .where(({ id }))
        .del()
}

module.exports = {
    findBy,
    findById,
    add,
    addSleepData,
    getSleepData,
    updateSleepData,
    deleteSleepData
}