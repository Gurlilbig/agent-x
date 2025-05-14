// src/routes/index.js
const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

router.use('/v1', apiRoutes);

module.exports = router;