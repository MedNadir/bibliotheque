// server.js
// Import necessary modules
// Load environment variables from .env file
import 'dotenv/config'
// import the Express framework
import express from 'express';
// import helmet for security headers
import helmet from 'helmet';
// import compression for response compression
import compression from 'compression';
// import cors for Cross-Origin Resource Sharing
import cors from 'cors';
// JSON middleware via express

// Create an Express application
const app = express();

// Middleware setup
// Use helmet to set security-related HTTP headers
app.use(helmet());
// Use compression to compress response bodies
app.use(compression());
// Enable CORS for all routes
app.use(cors());
// Use JSON middleware to parse JSON request bodies
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
	res.send('OK');
});

// Retrieve the port number from environment variables
const PORT = process.env.PORT || 3000;
// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

