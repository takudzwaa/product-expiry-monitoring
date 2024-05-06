// ES6 import syntax
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import productsRouter from './routes/products';
import session from 'express-session';

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});


const app = express(); 

app.use(express.json());

// Routes
app.use('/api', productsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Configure session middleware
app.use(session({
  secret: 'uihuiiua$@#hi83998h27hiay3!!h4$suib8&huhsqqpk3nvmz>j', 
  resave: false,
  saveUninitialized: false
}));

// Other middleware and route setup...
