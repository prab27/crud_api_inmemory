const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const routes = require('./routes');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Register API routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
