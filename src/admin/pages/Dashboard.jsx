/**
 * Admin Dashboard Page
 * 
 * Main admin dashboard with overview statistics
 * TODO: Implement real-time statistics, charts, recent activities
 */

import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import AdminLayout from '../../layouts/AdminLayout';

const Dashboard = () => {
  // TODO: Fetch dashboard statistics from API
  const stats = [
    { label: 'Total Sales', value: formatCurrency(45231), change: '+12%', icon: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' },
    { label: 'Orders', value: '1,234', change: '+8%', icon: 'M9 12h6m-6 4h6M7 20h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Customers', value: '5,678', change: '+15%', icon: 'M12 4.354a4 4 0 110 8.646 4 4 0 010-8.646M9 9a6 6 0 1112 0 6 6 0 01-12 0z' },
    { label: 'Products', value: '289', change: '-2%', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
                <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-6">Sales Overview</h2>
            {/* TODO: Add chart library (Chart.js, Recharts) */}
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Chart will be displayed here
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-6">Recent Orders</h2>
            {/* TODO: Fetch recent orders */}
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Order #{1000 + item}</p>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                  <span className="text-sm font-semibold text-red-600">{formatCurrency(199.99)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
