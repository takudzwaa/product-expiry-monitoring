import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  batchNo: {type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  expiryDate: { type: Date, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;