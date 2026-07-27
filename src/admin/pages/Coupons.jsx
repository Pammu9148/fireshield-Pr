/**
 * Admin Coupons Page
 * 
 * Manage promotional coupons and discounts
 * TODO: Implement coupon management - create, edit, track
 */

import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Coupons = () => {
  const [coupons] = React.useState([
    { id: 1, code: 'SUMMER20', discount: '20%', expiry: '2024-08-31', usage: 45, status: 'active' },
    { id: 2, code: 'SAVE10', discount: '₹10', expiry: '2024-12-31', usage: 120, status: 'active' },
    { id: 3, code: 'WINTER30', discount: '30%', expiry: '2024-02-28', usage: 0, status: 'inactive' },
  ]);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Coupons</h1>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
            + Create Coupon
          </button>
        </div>

        {/* Coupons Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Code</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Discount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Expiry Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Used</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{coupon.code}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{coupon.discount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{coupon.expiry}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{coupon.usage} times</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        coupon.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {coupon.status}
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

export default Coupons;
