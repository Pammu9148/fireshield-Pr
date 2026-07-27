import React, { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';

const Customers = () => {
  const [customers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8900', orders: 5, totalSpent: 1299.95 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8901', orders: 3, totalSpent: 799.97 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8902', orders: 8, totalSpent: 2499.92 },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Customer Directory</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.orders}</td>
                <td className="p-3">{formatCurrency(c.totalSpent)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;