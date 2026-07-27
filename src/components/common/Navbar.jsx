import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <Link to="/" className="text-xl font-bold text-red-600">
        FireShieldPro
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
        <Link to="/" className="hover:text-red-600">Home</Link>
        <Link to="/product" className="hover:text-red-600">Products</Link>
        <Link to="/careers" className="hover:text-red-600">Careers</Link>
        <Link to="/contact" className="hover:text-red-600">Contact</Link>
        <Link to="/cart" className="hover:text-red-600">Cart</Link>
        <Link to="/checkout" className="hover:text-red-600">Checkout</Link>
        <Link to="/admin" className="hover:text-red-600 text-xs bg-slate-100 px-2 py-1 rounded">Admin</Link>
      </div>

      {/* Authentication & Profile Section */}
      <div className="flex items-center gap-4">
        {currentUser ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-800">
              Hi, {currentUser.name}
            </span>
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;