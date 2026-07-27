import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'FireShield Pro Smart Extinguisher',
      price: 299,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Heat & Smoke Sensor Pack',
      price: 89,
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md border border-slate-200 my-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-slate-500 mb-4">Your cart is currently empty.</p>
          <Link
            to="/product"
            className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="divide-y divide-slate-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="py-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">{item.name}</h3>
                  <p className="text-sm text-slate-500">{formatCurrency(item.price)} each</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded border-slate-300">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 font-medium text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-bold text-slate-800 w-16 text-right">
                    {formatCurrency(item.price * item.quantity)}
                  </span>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Total:</p>
              <p className="text-2xl font-bold text-slate-900">
                {formatCurrency(totalAmount)}
              </p>
            </div>

            <Link
              to="/checkout"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;