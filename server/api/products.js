const express = require('express');

const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
    // Logic to fetch all products from the database
    // ...
    res.json(products);
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to fetch a specific product by ID from the database
    // ...
    res.json(product);
});

// POST /api/products
router.post('/', (req, res) => {
    const newProduct = req.body;
    // Logic to create a new product in the database
    // ...
    res.json(createdProduct);
});

// PUT /api/products/:id
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    // Logic to update a specific product by ID in the database
    // ...
    res.json(updatedProduct);
});

// DELETE /api/products/:id
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to delete a specific product by ID from the database
    // ...
    res.sendStatus(204);
});

module.exports = router;