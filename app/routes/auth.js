const express = require('express')
const router = express.Router()
const { loginCtrl, registerCtrl } = require('../controlles/auth')

router.get('/', (req, res) => {
    res.send("Hola desde /auth");
})

router.get('/login', (req, res) => {
    res.send("Hola desde /auth/login");
})
router.post('/login', loginCtrl)

router.get('/register', (req, res) => {
    res.send("Hola desde /auth/register");
});
router.post('/register', registerCtrl)

module.exports = router