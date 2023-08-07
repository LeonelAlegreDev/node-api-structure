const express = require('express')
const router = express.Router()
const { loginCtrl, registerCtrl } = require('../controllers/auth')
const { getRegisterPage } = require('../controllers/ssr/auth');

//  auth/login
router.get('/login', (req, res) => { 
    res.send("login");
});
router.post('/login', loginCtrl);

// auth/register
router.get('/register', getRegisterPage);


router.post('/register', registerCtrl);   // temporal

module.exports = router;