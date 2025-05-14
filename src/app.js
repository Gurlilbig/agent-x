// src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// const { errorHandler } = require('./middlewares/errorHandler');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Health check
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'OK', timestamp: new Date() });
// });

// Error handling
// app.use(errorHandler);

module.exports = app;