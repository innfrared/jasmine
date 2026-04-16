import TermsConditionsScreen from '@/features/policies/views/TermsConditionsScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type TermsConditionsPageProps = {
  params: Promise<LocaleRouteParams>;
};

const TermsConditionsPage = async ({ params }: TermsConditionsPageProps) => {
  await validateLocale(params);
  return <TermsConditionsScreen />;
};

export default TermsConditionsPage;
