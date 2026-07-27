import React from 'react';

const createAdminPlaceholder = (title) => () => (
  <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm m-4">
    <h2 className="text-2xl font-bold mb-2 text-slate-800">Admin: {title}</h2>
    <p className="text-slate-500">Module architecture initialized.</p>
  </div>
);

export const Dashboard = createAdminPlaceholder('Dashboard');
export const Products = createAdminPlaceholder('Product Management');
export const Orders = createAdminPlaceholder('Order Management');
export const Customers = createAdminPlaceholder('Customer Directory');
export const Reviews = createAdminPlaceholder('Review Moderation');
export const Coupons = createAdminPlaceholder('Coupon Management');
export const Analytics = createAdminPlaceholder('Analytics Overview');
export const Settings = createAdminPlaceholder('System Settings');