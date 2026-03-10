import { Suspense } from 'react';
import OrderConfirmationScreen from '../../../../src/presentation/screen/orderConfirmation/OrderConfirmationScreen';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderConfirmationPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <OrderConfirmationScreen />
  </Suspense>
  );
}
