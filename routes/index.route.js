const express = require('express');
const router = express.Router();

// Import routes
const openaiRoutes = require('./openai.routes');

router.use('/openai', openaiRoutes);

module.exports = router;
