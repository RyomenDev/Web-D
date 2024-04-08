
const express = require('express');
const router = express.Router();

const {createTodo} = require('../controllers/createTodo');

// define API route

// create
router.post('/createTodo', createTodo); // mapped path to controller function

module.exports = router;

