import { Suspense } from 'react';
import CheckoutScreen from '../../../src/presentation/screen/checkout/CheckoutScreen';
import { AuthProvider } from '../../../src/context/AuthContext';

export default function CartPage() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutScreen />
      </Suspense>
    </AuthProvider>
  );
}
