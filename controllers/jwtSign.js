require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSign = (name, email) => {
    return jwt.sign({ name, email }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

module.exports = { jwtSign }