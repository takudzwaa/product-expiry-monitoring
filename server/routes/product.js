import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Route to get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new product
router.post('/products', async (req, res) => {
  const product = new Product({
    batchNo: req.body.batchNo,
    name: req.body.name,
    price: req.body.price,
    expiryDate: req.body.expiryDate
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Route to update a product
router.patch('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (req.body.batchNo) {
      product.batchNo = req.body.batchNo;
    }

    if (req.body.name) {
      product.name = req.body.name;
    }

    if (req.body.price) {
      product.price = req.body.price;
    }

    if (req.body.expiryDate) {
      product.expiryDate = req.body.expiryDate;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  //route to delete a product
  router.delete('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.remove();
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
});

export default router;


