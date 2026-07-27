/**
 * Admin Reviews Page
 * 
 * Manage product reviews and ratings
 * TODO: Implement review management - approve, reject, respond
 */

import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Reviews = () => {
  const [reviews] = React.useState([
    { id: 1, product: 'Product 1', author: 'John Doe', rating: 5, text: 'Excellent product!', status: 'pending' },
    { id: 2, product: 'Product 2', author: 'Jane Smith', rating: 4, text: 'Good quality', status: 'approved' },
    { id: 3, product: 'Product 3', author: 'Bob Johnson', rating: 2, text: 'Not as expected', status: 'approved' },
  ]);

  const getStatusColor = (status) => {
    return status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Reviews</h1>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search reviews..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
          </select>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Product</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Author</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Review</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{review.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{review.author}</td>
                  <td className="px-6 py-4 text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{review.text}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(review.status)}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button className="text-green-600 hover:underline">Approve</button>
                      <button className="text-red-600 hover:underline">Reject</button>
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

export default Reviews;
