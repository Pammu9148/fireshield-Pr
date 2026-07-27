import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: 'Firefighter Rescue Telescopic Light (Field Model)',
    category: 'Lighting',
    price: 1500,
    description: 'Multi-stage PVC telescopic emergency mast with top-mounted LED floodlight. Tested for high-visibility firefighter field operations.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Adjustable Foldable Tripod Base Stand',
    category: 'Lighting',
    price: 800,
    description: 'Compact and portable PVC folding tripod legs featuring reinforced joint fittings for fast deployment on rough terrain.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Portable High-Reach Emergency Light',
    category: 'Lighting',
    price: 1200,
    description: 'Full-height extendable telescopic mast equipped with rechargeable high-luminosity LED search head for rescue operations.',
    inStock: true,
  },
];

// Helper component for crisp, zero-dependency tripod light previews
const TripodLightIcon = () => (
  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-4">
    <svg
      viewBox="0 0 200 200"
      className="w-32 h-32 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Light Beams */}
      <path d="M70 20 L40 5 M70 30 L30 30 M70 40 L40 55" stroke="rgb(251,191,36)" strokeWidth="3" opacity="0.8" />
      <path d="M130 20 L160 5 M130 30 L170 30 M130 40 L160 55" stroke="rgb(251,191,36)" strokeWidth="3" opacity="0.8" />

      {/* Top Searchlight Unit */}
      <rect x="75" y="20" width="50" height="25" rx="4" fill="#334155" stroke="#94a3b8" />
      <circle cx="100" cy="32.5" r="7" fill="#fbbf24" />

      {/* Telescopic Mast */}
      <line x1="100" y1="45" x2="100" y2="120" stroke="#cbd5e1" strokeWidth="6" />
      <circle cx="100" cy="70" r="4" fill="#ef4444" />
      <circle cx="100" cy="95" r="4" fill="#ef4444" />

      {/* PVC Base Stand */}
      <path d="M100 120 L60 175 M100 120 L140 175 M100 120 L100 180" stroke="#e2e8f0" strokeWidth="6" />
      <path d="M50 175 L70 175 M130 175 L150 175" stroke="#e2e8f0" strokeWidth="6" />
    </svg>
    <span className="text-xs font-semibold text-slate-300 mt-2 uppercase tracking-wider">
      Emergency Tripod LED Light
    </span>
  </div>
);

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Lighting'];

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Emergency Lighting Products</h2>
          <p className="text-slate-600 text-sm mt-1">
            Browse our firefighter-tested telescopic LED lights and tripod bases.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            {/* Built-in Product Image Display */}
            <div className="h-72 w-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
              <TripodLightIcon />
              <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider text-red-600 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm">
                {product.category}
              </span>
            </div>

            {/* Product Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{product.name}</h3>
                <p className="text-2xl font-extrabold text-slate-900 mb-2">₹{product.price}</p>
                <p className="text-sm text-slate-600 mb-4">{product.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span
                  className={`text-xs font-medium ${
                    product.inStock ? 'text-green-600' : 'text-slate-400'
                  }`}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>

                <Link
                  to="/cart"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;