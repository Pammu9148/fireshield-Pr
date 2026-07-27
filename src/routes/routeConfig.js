/**
 * Routes Configuration
 * 
 * Central configuration for all application routes
 * Organized by route type: public, auth, shop, admin
 */

import { ROUTES } from '../utils/constants';

/**
 * Public Routes
 * Accessible to all users
 */
export const publicRoutes = [
  {
    path: ROUTES.HOME,
    name: 'Home',
  },
  {
    path: ROUTES.SHOP,
    name: 'Shop',
  },
  {
    path: ROUTES.PRODUCT,
    name: 'Product',
  },
  {
    path: ROUTES.CONTACT,
    name: 'Contact',
  },
  {
    path: ROUTES.CAREERS,
    name: 'Careers',
  },
];

/**
 * Authentication Routes
 * For login, signup, and password recovery
 */
export const authRoutes = [
  {
    path: ROUTES.LOGIN,
    name: 'Login',
  },
  {
    path: ROUTES.SIGNUP,
    name: 'Sign Up',
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    name: 'Forgot Password',
  },
];

/**
 * Protected Routes
 * Requires user to be authenticated
 */
export const protectedRoutes = [
  {
    path: ROUTES.CART,
    name: 'Cart',
  },
  {
    path: ROUTES.CHECKOUT,
    name: 'Checkout',
  },
  {
    path: ROUTES.PROFILE,
    name: 'Profile',
  },
];

/**
 * Admin Routes
 * Requires user to be authenticated with admin role
 */
export const adminRoutes = [
  {
    path: ROUTES.ADMIN_DASHBOARD,
    name: 'Dashboard',
  },
  {
    path: ROUTES.ADMIN_PRODUCTS,
    name: 'Products',
  },
  {
    path: ROUTES.ADMIN_ORDERS,
    name: 'Orders',
  },
  {
    path: ROUTES.ADMIN_CUSTOMERS,
    name: 'Customers',
  },
  {
    path: ROUTES.ADMIN_REVIEWS,
    name: 'Reviews',
  },
  {
    path: ROUTES.ADMIN_COUPONS,
    name: 'Coupons',
  },
  {
    path: ROUTES.ADMIN_ANALYTICS,
    name: 'Analytics',
  },
  {
    path: ROUTES.ADMIN_SETTINGS,
    name: 'Settings',
  },
];

/**
 * Utility Routes
 * Error pages and other utility routes
 */
export const utilityRoutes = [
  {
    path: ROUTES.NOT_FOUND,
    name: 'Not Found',
  },
];

export default {
  publicRoutes,
  authRoutes,
  protectedRoutes,
  adminRoutes,
  utilityRoutes,
};
