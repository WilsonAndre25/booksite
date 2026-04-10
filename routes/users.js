
const express = require('express');
const bcrypt= require('bcrypt')
const router = express.Router();
const createError = require('http-errors');
const User = require('../models/User')

console.log("USer:", User)

// we espect the request body to contain user fields in the nessary format


router.post('/register', async (request, response, next) => {

    try {
        console.log("BODY:", request.body)

        const { name, email, password } = request.body

        const salt = await bcrypt.genSalt(8)
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: passwordHash
        })

        await newUser.save()

        response.send('User created successfully!')
    } catch (err) {
        next(createError(500, `Error: ${err.message}`))
    }
})

module.exports = router