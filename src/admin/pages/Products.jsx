/**
 * Admin Products Page
 * 
 * Manage products - view, add, edit, delete
 * TODO: Implement product management functionality
 */

import React, { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import AdminLayout from '../../layouts/AdminLayout';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', sku: 'SKU001', price: 99.99, stock: 50, status: 'active' },
    { id: 2, name: 'Product 2', sku: 'SKU002', price: 149.99, stock: 30, status: 'active' },
    { id: 3, name: 'Product 3', sku: 'SKU003', price: 199.99, stock: 0, status: 'inactive' },
  ]);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
            + Add Product
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">SKU</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Price</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Stock</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{formatCurrency(product.price)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;
