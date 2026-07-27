import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Public Pages
import Home from './pages/public/Home';
import Contact from './pages/public/Contact';
import Careers from './pages/public/Careers';
import NotFound from './pages/public/NotFound';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';

// Shop Pages
import Product from './pages/shop/Product';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import Profile from './pages/shop/Profile';

// AuthProvider and useAuth are provided by src/context/AuthContext

// RequireAuth wrapper to protect routes
const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
};

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-red-600 tracking-tight">
          FireShield<span className="text-slate-800">Pro</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <Link to="/product" className="hover:text-red-600 transition">
            Products
          </Link>
          <Link to="/careers" className="hover:text-red-600 transition">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-red-600 transition">
            Cart
          </Link>
        </nav>

        <div className="flex items-center space-x-3 text-sm">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-800">
                Hi, {currentUser.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1.5 text-slate-700 hover:text-red-600 font-medium transition"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
          <Navbar />

          {/* Page Main Content */}
          <main className="flex-grow max-w-6xl w-full mx-auto p-4">
            <Routes>
              <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="/product" element={<RequireAuth><Product /></RequireAuth>} />
              <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
              <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
              <Route path="/careers" element={<RequireAuth><Careers /></RequireAuth>} />
              <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Profile is a protected route */}
              <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
            <p>© {new Date().getFullYear()} FireShield Pro. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

