import ShippingPolicyScreen from '@/features/policies/views/ShippingPolicyScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type ShippingPolicyPageProps = {
  params: Promise<LocaleRouteParams>;
};

const ShippingPolicyPage = async ({ params }: ShippingPolicyPageProps) => {
  await validateLocale(params);
  return <ShippingPolicyScreen />;
};

export default ShippingPolicyPage;
