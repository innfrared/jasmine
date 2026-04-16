import PrivacyPolicyScreen from '@/features/policies/views/PrivacyPolicyScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type PrivacyPolicyPageProps = {
  params: Promise<LocaleRouteParams>;
};

const PrivacyPolicyPage = async ({ params }: PrivacyPolicyPageProps) => {
  await validateLocale(params);
  return <PrivacyPolicyScreen />;
};

export default PrivacyPolicyPage;
