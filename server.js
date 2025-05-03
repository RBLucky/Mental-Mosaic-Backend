"use strict"

// Import packages and modules
import express from 'express';
import dotenv from 'dotenv';

// Initialize Express
const app = express();

// Configure environment variables
dotenv.config();

// File Serving
app.use(express.static('client'));

// Home page route
app.get('/', requestAnimationFrame, res => {
    res.sendFile(__dirname + '/client/index.html');
})

// Run the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });