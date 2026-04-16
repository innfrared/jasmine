import OrderConfirmationPage from '@/features/order/pages/OrderConfirmationPage';
import { validateLocale, type LocaleRouteParams } from '../../_route-utils/locale';

type OrderConfirmationRouteParams = LocaleRouteParams & {
  orderId: string;
};

type OrderConfirmationPageProps = {
  params: Promise<OrderConfirmationRouteParams>;
};

const OrderConfirmationRoutePage = async ({
  params,
}: OrderConfirmationPageProps) => {
  await validateLocale(params);
  return <OrderConfirmationPage />;
};

export default OrderConfirmationRoutePage;
