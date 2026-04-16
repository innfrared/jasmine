import ReturnsRefundsScreen from '@/features/policies/views/ReturnsRefundsScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type ReturnsRefundsPageProps = {
  params: Promise<LocaleRouteParams>;
};

const ReturnsRefundsPage = async ({ params }: ReturnsRefundsPageProps) => {
  await validateLocale(params);
  return <ReturnsRefundsScreen />;
};

export default ReturnsRefundsPage;
