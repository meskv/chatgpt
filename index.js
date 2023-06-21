// Import required modules
const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Import environment variables
const { PORT } = require('./config/keys');

// Configure CORS options
const corsOptions = {};
app.use(cors(corsOptions));

// Request logging middleware
app.use(morgan('dev'));

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRoute = require('./routes/index.route');

// Routes
app.use('/', indexRoute)
// app.use('/auth', AuthRoute)

// Error handling middleware - Not Found
app.use(async (req, res, next) => {
    next(createError.NotFound());
});

// Error handling middleware - General
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    });
});

if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    // Serve static files from the React frontend app
    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
// Start the server
// const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
