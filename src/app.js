// src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// const { errorHandler } = require('./middlewares/errorHandler');
const config = require('./config/config');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(cors());

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

// Routes
app.use('/api', routes);

// Health check
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'OK', timestamp: new Date() });
// });

// Error handling
// app.use(errorHandler);

module.exports = app;