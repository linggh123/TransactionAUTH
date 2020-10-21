const hyperId = require('hyperid')

function authentication(req, res, next) {
    // bearer kodemu
    const authorization = req.headers.authorization

    console.log(authorization)
    const token = authorization.split(' ')[1]
    const isValidToken = hyperId.decode(token)
    if (isValidToken) {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authentication