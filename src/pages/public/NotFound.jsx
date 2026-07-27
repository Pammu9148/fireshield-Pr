import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold text-red-600 tracking-tight">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Page Not Found</h2>
      <p className="text-slate-600 max-w-md mb-6 text-sm">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition duration-150 text-sm shadow-sm"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;