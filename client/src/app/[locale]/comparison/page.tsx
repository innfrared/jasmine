import ComparisonScreen from '@/features/catalog/views/ComparisonScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type ComparisonPageProps = {
  params: Promise<LocaleRouteParams>;
};

const ComparisonPage = async ({ params }: ComparisonPageProps) => {
  await validateLocale(params);
  return <ComparisonScreen />;
};

export default ComparisonPage;
