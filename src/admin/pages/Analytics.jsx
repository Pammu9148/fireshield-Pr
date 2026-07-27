/**
 * Admin Analytics Page
 * 
 * Business analytics and insights
 * TODO: Implement charts, reports, analytics data
 */

import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Analytics = () => {
  const metrics = [
    { label: 'Page Views', value: '45,231', change: '+12%' },
    { label: 'Conversion Rate', value: '3.24%', change: '+0.5%' },
    { label: 'Bounce Rate', value: '42.31%', change: '-2.1%' },
    { label: 'Avg. Session Duration', value: '3m 42s', change: '+18%' },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 text-sm font-medium mb-2">{metric.label}</p>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              <p className={`text-sm font-semibold mt-2 ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-6">Revenue Trend</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Chart will be displayed here
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-6">Top Products</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Chart will be displayed here
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
