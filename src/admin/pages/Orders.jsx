/**
 * Admin Orders Page
 * 
 * Manage orders - view, filter, update status
 * TODO: Implement order management functionality
 */

import React, { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import AdminLayout from '../../layouts/AdminLayout';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1001, customer: 'John Doe', total: 299.99, status: 'pending', date: '2024-01-15' },
    { id: 1002, customer: 'Jane Smith', total: 199.99, status: 'shipped', date: '2024-01-14' },
    { id: 1003, customer: 'Bob Johnson', total: 149.99, status: 'delivered', date: '2024-01-13' },
  ]);

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Export
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
            <option>All Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Total</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{formatCurrency(order.total)}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:underline">View</button>
                      <button className="text-gray-600 hover:underline">Print</button>
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

export default Orders;
