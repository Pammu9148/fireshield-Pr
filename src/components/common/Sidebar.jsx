/**
 * Sidebar Component
 * 
 * Used primarily in admin layout
 * TODO: Implement navigation and active link highlighting
 */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const adminMenuItems = [
    {
      label: 'Dashboard',
      path: ROUTES.ADMIN_DASHBOARD,
      icon: 'M3 12l2-4m0 0l7-4 7 4M5 8v10a1 1 0 001 1h12a1 1 0 001-1V8M5 8L3 6m14 0l2 2m-2-2v2m0 0h2.5M13 6h1',
    },
    {
      label: 'Products',
      path: ROUTES.ADMIN_PRODUCTS,
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    },
    {
      label: 'Orders',
      path: ROUTES.ADMIN_ORDERS,
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      label: 'Customers',
      path: ROUTES.ADMIN_CUSTOMERS,
      icon: 'M12 4.354a4 4 0 110 8.646 4 4 0 010-8.646M9 9a6 6 0 1112 0 6 6 0 01-12 0z',
    },
    {
      label: 'Reviews',
      path: ROUTES.ADMIN_REVIEWS,
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
    },
    {
      label: 'Coupons',
      path: ROUTES.ADMIN_COUPONS,
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      label: 'Analytics',
      path: ROUTES.ADMIN_ANALYTICS,
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      label: 'Settings',
      path: ROUTES.ADMIN_SETTINGS,
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-40 w-64 h-full bg-gray-900 text-gray-300 
          transform md:transform-none transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Sidebar header */}
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-red-600">FireShield</h1>
          <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-8">
          <ul className="space-y-2">
            {adminMenuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                    ${
                      isActive(item.path)
                        ? 'bg-red-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }
                  `}
                  onClick={onClose}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User info and logout */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <UserPanel />
        </div>
      </aside>
    </>
  );
};

const UserPanel = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      {currentUser ? (
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">{currentUser.name}</p>
            <p className="text-xs text-gray-400">{currentUser.email}</p>
          </div>
          <div className="flex-shrink-0 w-24">
            <button
              onClick={handleLogout}
              className="w-full px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Link to="/login" className="text-sm text-red-500 hover:underline">Log in</Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
