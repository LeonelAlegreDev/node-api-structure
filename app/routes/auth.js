const express = require('express')
const router = express.Router()
const { loginCtrl, registerCtrl } = require('../controlles/auth')

//  auth/login
router.get('/login', (req, res) => {
    res.send("Log In");
})
router.post('/login', loginCtrl);

// auth/register
router.get('/register', (req, res) => {
    res.send("Sign Up");
});
router.post('/register', registerCtrl);

module.exports = router;