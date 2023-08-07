const { verifyToken } = require('../helpers/generateToken')

const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)

        if (tokenData && tokenData._id) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Acceso denegado.' })
        }
    } catch (e) {
        res.status(409)
        res.send({ error: 'Acceso denegado.' })
    }
}
module.exports = checkAuth