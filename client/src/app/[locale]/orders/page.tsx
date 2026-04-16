import OrdersScreen from '@/features/order/views/OrdersScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type OrdersPageProps = {
  params: Promise<LocaleRouteParams>;
};

const OrdersPage = async ({ params }: OrdersPageProps) => {
  await validateLocale(params);
  return <OrdersScreen />;
};

export default OrdersPage;
