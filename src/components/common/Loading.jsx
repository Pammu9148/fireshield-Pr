/**
 * Loading Component
 * 
 * Displays a loading spinner/skeleton
 * Used while data is being fetched or pages are transitioning
 */

import React from 'react';

const Loading = ({ fullScreen = false, message = 'Loading...' }) => {
  const spinnerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'
    : 'flex items-center justify-center py-12';

  return (
    <div className={spinnerClasses}>
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-600 animate-spin"></div>
        </div>

        {/* Loading message */}
        {message && (
          <p className="text-gray-600 text-sm font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

/**
 * Skeleton Loading Component
 * Used for skeleton loading while data is being fetched
 */
export const SkeletonLoader = ({ count = 3, height = 'h-12' }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`${height} bg-gray-200 rounded-lg animate-pulse`}
        ></div>
      ))}
    </div>
  );
};

export default Loading;
