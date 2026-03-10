import { Suspense } from 'react';
import OrdersScreen from '../../../../src/presentation/screen/orders/OrdersScreen';

export default function OrdersPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <OrdersScreen />
  </Suspense>
  );
}
