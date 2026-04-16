import CheckoutPage from '@/features/checkout/pages/CheckoutPage';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type CartPageProps = {
  params: Promise<LocaleRouteParams>;
};

const CartPage = async ({ params }: CartPageProps) => {
  await validateLocale(params);
  return <CheckoutPage />;
};

export default CartPage;
