/**
 * Application Constants
 * 
 * Define all application-wide constants here
 */

// User roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
};

// Order status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned',
};

// Product status
export const PRODUCT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  OUT_OF_STOCK: 'outOfStock',
};

// Payment methods
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'creditCard',
  DEBIT_CARD: 'debitCard',
  PAYPAL: 'paypal',
  BANK_TRANSFER: 'bankTransfer',
};

// Routes
export const ROUTES = {
  // Public routes
  HOME: '/',
  SHOP: '/shop',
  PRODUCT: '/product/:id',
  CONTACT: '/contact',
  CAREERS: '/careers',
  NOT_FOUND: '/404',

  // Auth routes
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',

  // Customer routes
  CART: '/cart',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',

  // Admin routes
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_CUSTOMERS: '/admin/customers',
  ADMIN_REVIEWS: '/admin/reviews',
  ADMIN_COUPONS: '/admin/coupons',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_SETTINGS: '/admin/settings',
};

// Toast messages
export const TOAST_MESSAGES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
};

// Validation
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_USERNAME_LENGTH: 3,
  MAX_USERNAME_LENGTH: 50,
};

export default {
  USER_ROLES,
  ORDER_STATUS,
  PRODUCT_STATUS,
  PAYMENT_METHODS,
  ROUTES,
  TOAST_MESSAGES,
  PAGINATION,
  VALIDATION,
};
