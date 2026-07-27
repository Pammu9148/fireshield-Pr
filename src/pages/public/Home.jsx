import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12 my-6">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Next-Gen Safety with <span className="text-red-500">FireShield Pro</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Smart fire safety equipment and automated monitoring designed for homes, businesses, and emergency responders.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/product"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Rapid Response</h3>
          <p className="text-sm text-slate-600">
            Instant alerts and automated safety deployment in critical scenarios.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
          <div className="text-3xl mb-3">📡</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Smart IoT Sync</h3>
          <p className="text-sm text-slate-600">
            Real-time status monitoring directly from your dashboard or mobile setup.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Certified Reliability</h3>
          <p className="text-sm text-slate-600">
            Engineered to meet rigorous commercial and personal safety standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;