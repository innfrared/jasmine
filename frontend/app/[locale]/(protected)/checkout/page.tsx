import { Suspense } from 'react';
import CheckoutScreen from '../../../../src/presentation/screen/checkout/CheckoutScreen';

export default function CheckoutPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <CheckoutScreen />
  </Suspense>
  );
}
