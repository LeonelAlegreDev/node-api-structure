const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const checkRoleAuth = require('../middleware/roleAuth');
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/api/users');
const { getUsersPage } = require('../controllers/ssr/users');
const { validateCreate } = require('../validators/users');

//router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)
router.get('/', getUsersPage, (req, res) => {
    res.send('GET /users');
});

//router.get('/:id', checkAuth, getItem)
router.get('/:id', checkAuth, (req, res) => {
    res.send('GET /users/id');
});

//router.post('/', validateCreate, createItem)
router.post('/', (req, res) =>{
    res.send('POST /users');
});

//router.patch('/:id', updateItem)
router.patch('/:id', (req, res) => {
    return res.send('PATCH /users/id');
});

//router.delete('/:id', deleteItem)
router.delete('/:id', (req, res) => {
    res.send('DELETE /users');
});

module.exports = router