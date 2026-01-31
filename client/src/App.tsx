import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landing = lazy(
  () => import('./presentation/screen/landing/LandingScreen')
);
const Comparison = lazy(
  () => import('./presentation/screen/comparison/ComparisonScreen')
);
const Products = lazy(() => import('./presentation/screen/products/ProductsScreen'));
const ProductScreen = lazy(
  () => import('./presentation/screen/product/ProductScreen')
);
const CheckoutScreen = lazy(
  () => import('./presentation/screen/checkout/CheckoutScreen')
);
const OrderConfirmationScreen = lazy(
  () =>
    import('./presentation/screen/orderConfirmation/OrderConfirmationScreen')
);
const ProfileScreen = lazy(
  () => import('./presentation/screen/profile/ProfileScreen')
);
const OrdersScreen = lazy(
  () => import('./presentation/screen/orders/OrdersScreen')
);
const ShippingScreen = lazy(
  () => import('./presentation/screen/shipping/ShippingScreen')
);
const ShippingPolicyScreen = lazy(
  () => import('./presentation/screen/policies/ShippingPolicyScreen')
);
const ReturnsRefundsScreen = lazy(
  () => import('./presentation/screen/policies/ReturnsRefundsScreen')
);
const PrivacyPolicyScreen = lazy(
  () => import('./presentation/screen/policies/PrivacyPolicyScreen')
);
const TermsConditionsScreen = lazy(
  () => import('./presentation/screen/policies/TermsConditionsScreen')
);

const RouteFallback: React.FC = () => (
  <div style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
    Loading...
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CheckoutScreen />} />
          <Route
            path="/order-confirmation/:orderId"
            element={<OrderConfirmationScreen />}
          />
          <Route
            path="/products/product/:productName"
            element={<ProductScreen />}
          />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/shipping-policy" element={<ShippingPolicyScreen />} />
          <Route path="/returns-refunds" element={<ReturnsRefundsScreen />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
          <Route path="/terms-conditions" element={<TermsConditionsScreen />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
