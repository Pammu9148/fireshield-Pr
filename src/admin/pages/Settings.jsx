/**
 * Admin Settings Page
 * 
 * Application settings and configuration
 * TODO: Implement settings management
 */

import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Settings = () => {
  const [settings, setSettings] = useState({
    storeName: 'FireShield Pro',
    storeEmail: 'admin@fireshield.com',
    phone: '+1 (234) 567-8900',
    address: '123 Security Lane',
    city: 'Tech City',
    state: 'TC',
    country: 'United States',
    currency: 'USD',
    taxRate: '10',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // TODO: Save settings to API
    alert('Settings saved successfully');
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        {/* Settings Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div>
            <nav className="space-y-2 bg-white rounded-lg shadow p-4">
              {[
                { id: 'general', label: 'General' },
                { id: 'store', label: 'Store' },
                { id: 'payment', label: 'Payment' },
                { id: 'email', label: 'Email' },
              ].map((item) => (
                <button
                  key={item.id}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">General Settings</h2>

            <div className="space-y-6">
              {/* Store Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={settings.storeName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Store Email
                </label>
                <input
                  type="email"
                  name="storeEmail"
                  value={settings.storeEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* City, State, Country */}
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={settings.city}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={settings.state}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={settings.country}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Currency
                </label>
                <select
                  name="currency"
                  value={settings.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>CAD</option>
                </select>
              </div>

              {/* Tax Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  name="taxRate"
                  value={settings.taxRate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Save Button */}
              <div className="flex gap-4 pt-4 border-t">
                <button
                  onClick={handleSave}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Save Settings
                </button>
                <button className="border-2 border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
