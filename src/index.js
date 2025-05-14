// src/index.js
require('dotenv').config();
const app = require('./app');
const config = require('./config/config');
// const logger = require('./utils/logger');

const PORT = config.port || 3002;

app.get('/', (req, res) => res.json({ message: 'Welcome to Agent X' }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} in ${config.nodeEnv} mode`);
});