const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            res.status(404)
            res.send({ error: 'User not found' })
            return
        }
        const checkPassword = await compare(password, user.password)

        if (checkPassword) {
            const tokenSession = await tokenSign(user)
            res.send({
                data: user,
                tokenSession
            })
            return
        }
        else {
            res.status(409)
            res.send({ error: 'Invalid password' })
            return
        }
    } catch (e) {
        httpError(res, e)
    }
}

const registerCtrl = async (req, res) => {
    try {
        const { email, password, name } = req.body        
        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })
        res.send({ data: registerUser })
    } 
    catch (e) {
        httpError(res, e)
    }
}
module.exports = { loginCtrl, registerCtrl }