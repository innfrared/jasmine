import { Suspense } from 'react';
import PaymentScreen from '../../../../src/presentation/screen/payment/PaymentScreen';

export default function PaymentPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <PaymentScreen />
  </Suspense>
  );
}
