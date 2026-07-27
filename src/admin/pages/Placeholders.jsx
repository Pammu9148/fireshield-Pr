import React from 'react';

const createPlaceholder = (title) => () => (
  <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm m-4">
    <h2 className="text-2xl font-bold mb-2 text-slate-800">{title}</h2>
    <p className="text-slate-500">Page architecture ready. Feature implementation pending.</p>
  </div>
);

export const Home = createPlaceholder('Home Page');
export const Product = createPlaceholder('Product Details');
export const Cart = createPlaceholder('Shopping Cart');
export const Checkout = createPlaceholder('Checkout');
export const Login = createPlaceholder('User Login');
export const Signup = createPlaceholder('User Registration');
export const ForgotPassword = createPlaceholder('Forgot Password');
export const Profile = createPlaceholder('User Profile');
export const Careers = createPlaceholder('Careers');
export const Contact = createPlaceholder('Contact Us');
export const NotFound = createPlaceholder('404 - Page Not Found');