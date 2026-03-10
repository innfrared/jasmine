import { Suspense } from 'react';
import ShippingScreen from '../../../../src/presentation/screen/shipping/ShippingScreen';

export default function ShippingPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <ShippingScreen />
  </Suspense>
  );
}
