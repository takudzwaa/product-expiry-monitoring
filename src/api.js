import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // replace with your API endpoint

export async function createProduct(product) {
  const response = await axios.post(API_URL, product);
  return response.data;
}

export async function getProducts() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function updateProduct(id, product) {
  const response = await axios.put(`${API_URL}/${id}`, product);
  return response.data;
}

export async function deleteProduct(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}