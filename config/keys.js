if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    // Path: config\keys.js
    module.exports = require('./dev');
}