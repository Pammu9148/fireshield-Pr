/**
 * Project Structure Documentation
 * 
 * FireShield Pro - E-commerce Security Platform
 */

## 📁 Project Structure

```
src/
├── assets/                 # Static assets (images, icons)
│   ├── images/
│   └── icons/
│
├── components/             # Reusable components
│   └── common/            # Shared components (Navbar, Footer, etc.)
│       ├── Navbar.jsx     # Navigation bar
│       ├── Footer.jsx     # Footer section
│       ├── Sidebar.jsx    # Admin sidebar
│       ├── ProtectedRoute.jsx  # Route protection wrapper
│       └── Loading.jsx    # Loading spinner & skeleton
│
├── pages/                  # Page components
│   ├── auth/              # Authentication pages
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── ForgotPassword.jsx
│   ├── shop/              # E-commerce pages
│   │   ├── Shop.jsx       # Product listing
│   │   ├── Product.jsx    # Product details
│   │   ├── Cart.jsx       # Shopping cart
│   │   ├── Checkout.jsx   # Checkout flow
│   │   └── Profile.jsx    # User profile
│   └── public/            # Public pages
│       ├── Home.jsx       # Homepage
│       ├── Contact.jsx    # Contact page
│       ├── Careers.jsx    # Careers page
│       └── NotFound.jsx   # 404 page
│
├── admin/                 # Admin section
│   └── pages/
│       ├── Dashboard.jsx  # Admin dashboard
│       ├── Products.jsx   # Product management
│       ├── Orders.jsx     # Order management
│       ├── Customers.jsx  # Customer management
│       ├── Reviews.jsx    # Review management
│       ├── Coupons.jsx    # Coupon management
│       ├── Analytics.jsx  # Analytics dashboard
│       └── Settings.jsx   # Store settings
│
├── layouts/               # Layout templates
│   ├── MainLayout.jsx     # Main layout (Navbar + Footer)
│   ├── AuthLayout.jsx     # Auth layout (centered form)
│   └── AdminLayout.jsx    # Admin layout (Sidebar + Content)
│
├── routes/                # Route configuration
│   └── routeConfig.js     # Centralized route definitions
│
├── context/               # React Context
│   └── AuthContext.jsx    # Authentication context
│
├── hooks/                 # Custom React hooks
│   └── useFormValidation.js  # Form validation hook
│
├── services/              # API services
│   └── api.js            # API calls and HTTP client
│
├── firebase/              # Firebase configuration
│   ├── config.js         # Firebase initialization
│   └── index.js          # Firebase exports
│
├── utils/                 # Utility functions
│   ├── constants.js       # Application constants
│   └── helpers.js         # Helper functions
│
├── styles/                # Global styles
│   └── index.css         # Tailwind CSS & custom styles
│
├── App.jsx                # Main App component with routing
├── main.jsx               # React entry point
```

## 🚀 Key Features

- **Public Pages**: Home, Shop, Product Details, Contact, Careers
- **Authentication**: Login, Signup, Password Recovery
- **E-commerce**: Cart, Checkout, Product Management
- **User Account**: Profile, Order History, Address Management
- **Admin Panel**: Dashboard, Products, Orders, Customers, Reviews, Coupons, Analytics, Settings
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Route Protection**: ProtectedRoute component for authenticated pages
- **Loading States**: Skeleton loaders and loading spinners

## 🔧 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Notifications**: React Toastify
- **Backend**: Firebase (when ready)
  - Authentication
  - Firestore Database
  - Cloud Storage

## 📝 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.env.local` and add Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_PROJECT_ID=your_id
...
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 📌 Important Notes

- **NO Firebase Integration Yet**: All Firebase code is commented out
- **Placeholder Data**: Pages use mock data for demonstration
- **Ready for Implementation**: All structure in place, just needs business logic
- **Clean Code**: Well-organized with clear comments and documentation

## 🔐 Protected Routes

The following routes require authentication:
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/profile` - User profile

Admin routes require `admin` role:
- `/admin/dashboard`
- `/admin/products`
- `/admin/orders`
- `/admin/customers`
- `/admin/reviews`
- `/admin/coupons`
- `/admin/analytics`
- `/admin/settings`

## 📚 Component Usage

### ProtectedRoute
```jsx
<ProtectedRoute
  Component={CheckoutPage}
  isAuthenticated={isAuthenticated}
  isLoading={authLoading}
  requiredRole="customer"
  userRole={userRole}
/>
```

### AuthContext
```jsx
const { user, login, signup, logout, isAuthenticated } = useAuth();
```

## 🎯 Next Steps

1. **Integrate Firebase**: Uncomment Firebase code in `src/firebase/config.js`
2. **Implement Authentication**: Complete login/signup with Firebase
3. **Setup Database**: Create Firestore collections for products, orders, etc.
4. **Add Payment**: Integrate payment gateway (Stripe, PayPal)
5. **Implement Business Logic**: Add cart, checkout, and admin functionality
6. **Deploy**: Deploy to Firebase Hosting or similar platform

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Architecture Setup Complete - Ready for Development
