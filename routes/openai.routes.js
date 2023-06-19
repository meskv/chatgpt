const express = require('express');
const router = express.Router();

// Import Controllers
const openaiController = require('../controllers/openai.controller');

// @desc Get summary of text
// @route POST /openai/summary
// @access Public
router.post('/summary', openaiController.summaryController);

// @desc Chat with GPT-3
// @route POST /openai/chatbot
// @access Public
router.post('/chat', openaiController.chatbotController);


module.exports = router;