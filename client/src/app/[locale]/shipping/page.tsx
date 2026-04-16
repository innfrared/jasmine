import ShippingScreen from '@/features/shipping/views/ShippingScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type ShippingPageProps = {
  params: Promise<LocaleRouteParams>;
};

const ShippingPage = async ({ params }: ShippingPageProps) => {
  await validateLocale(params);
  return <ShippingScreen />;
};

export default ShippingPage;
