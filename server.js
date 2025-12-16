// server.js
// imports necessary modules and middleware
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

// initializes the Express application
const app = express();
const PORT = process.env.PORT

// serves static files from the 'public' directory
app.use(express.static('public'));

// applies middleware for security, CORS, compression, JSON parsing, URL-encoded data parsing, and logging
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));

// defines a simple route for the root URL



console.log(process.env.LOCALHOST || 'http://localhost:3000');
