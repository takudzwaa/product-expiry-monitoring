// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const Dashboard = () => {
  const [expiredProducts, setExpiredProducts] = useState([]);
  const [expiringSoonProducts, setExpiringSoonProducts] = useState([]);
  const [neverExpiredProducts, setNeverExpiredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const expiredRes = await axios.get('/api/products/expired');
        setExpiredProducts(expiredRes.data);

        const expiringSoonRes = await axios.get('/api/products/expiring-soon');
        setExpiringSoonProducts(expiringSoonRes.data);

        const neverExpiredRes = await axios.get('/api/products/never-expired');
        setNeverExpiredProducts(neverExpiredRes.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const createChartData = (products) => {
    return {
      labels: products.map(p => p.productName),
      datasets: [
        {
          label: 'Quantity',
          data: products.map(p => p.quantity),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'batchNo', headerName: 'Batch No', width: 150 },
    { field: 'productName', headerName: 'Product Name', width: 150 },
    { field: 'expiryDate', headerName: 'Expiry Date', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 110 },
    { field: 'dateOfEntry', headerName: 'Date of Entry', width: 150 },
  ];

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="chart-container">
        <h3>Recent Expired Products</h3>
        <Bar data={createChartData(expiredProducts)} />
      </div>

      <div className="chart-container">
        <h3>Products About to Expire</h3>
        <Bar data={createChartData(expiringSoonProducts)} />
      </div>

      <div className="chart-container">
        <h3>Products Never Expired</h3>
        <Bar data={createChartData(neverExpiredProducts)} />
      </div>

      <div className="table-container">
        <h3>Expired Products Table</h3>
        <DataGrid rows={expiredProducts.map(p => ({ ...p, id: p._id }))} columns={columns} pageSize={5} />
      </div>

      <div className="table-container">
        <h3>Expiring Soon Products Table</h3>
        <DataGrid rows={expiringSoonProducts.map(p => ({ ...p, id: p._id }))} columns={columns} pageSize={5} />
      </div>

      <div className="table-container">
        <h3>Never Expired Products Table</h3>
        <DataGrid rows={neverExpiredProducts.map(p => ({ ...p, id: p._id }))} columns={columns} pageSize={5} />
      </div>

      <div className="overall-statistics section">
        <h3>Overall Statistics</h3>
        {/* Add visual elements for overall statistics */}
      </div>
      <div className="recent-transactions section">
        <h3>Recent Transactions</h3>
        {/* Add list of recent transactions */}
      </div>
      <div className="product-inventory section">
        <h3>Product Inventory</h3>
        {/* Add summary of product inventory */}
      </div>
    </div>
  );
};

export default Dashboard;
