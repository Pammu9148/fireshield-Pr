/**
 * Shop Page
 * 
 * Display all products with filters and sorting
 * TODO: Implement product listing, filtering, pagination
 */

import React, { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';

const Shop = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterOpen, setFilterOpen] = useState(false);

  // TODO: Fetch products from API
  const products = [
    { id: 1, name: 'Product 1', price: 99.99 },
    { id: 2, name: 'Product 2', price: 149.99 },
    { id: 3, name: 'Product 3', price: 199.99 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold">Shop</h1>
          <p className="text-gray-600 mt-2">Browse our security products</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>

              {/* TODO: Add price filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <input type="range" className="w-full" />
              </div>

              {/* TODO: Add category filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Category</h4>
                <div className="space-y-2">
                  {['All', 'Software', 'Hardware', 'Services'].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* TODO: Add rating filter */}
              <div>
                <h4 className="font-medium mb-2">Rating</h4>
                <div className="space-y-2">
                  {['5 Stars', '4+ Stars', '3+ Stars'].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sorting */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">Showing {products.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    {/* TODO: Add product image */}
                    <span className="text-gray-400">No image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-red-600 font-bold mb-4">{formatCurrency(product.price)}</p>
                    <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded ${
                    page === 1
                      ? 'bg-red-600 text-white'
                      : 'bg-white border hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
