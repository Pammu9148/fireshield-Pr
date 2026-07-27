/**
 * ProtectedRoute Component
 * 
 * Wrapper component for routes that require authentication
 * Redirects to login if user is not authenticated
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import Loading from './Loading';

/**
 * ProtectedRoute Component
 * @param {Object} props
 * @param {React.Component} props.Component - Component to render
 * @param {boolean} props.isAuthenticated - User authentication status
 * @param {boolean} props.isLoading - Loading state
 * @param {string} props.requiredRole - Required user role (optional)
 * @param {string} props.userRole - Current user role
 */
const ProtectedRoute = ({
  Component,
  isAuthenticated = false,
  isLoading = false,
  requiredRole = null,
  userRole = null,
  ...rest
}) => {
  // Show loading while checking authentication
  if (isLoading) {
    return <Loading />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // Check role-based access if required role is specified
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // Render the protected component
  return <Component {...rest} />;
};

export default ProtectedRoute;
