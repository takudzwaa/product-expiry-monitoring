// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import productRouter from './routes/product.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware configuration
app.use(express.json());
app.use(session({
  secret: 'uihuiiua$@#hi83998h27hiay3!!h4$suib8&huhsqqpk3nvmz>j', 
  resave: false,
  saveUninitialized: false
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

// Define routes
app.use('/api/products', productRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});