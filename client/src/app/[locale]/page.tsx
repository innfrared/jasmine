import LandingScreen from '@/features/landing/views/LandingScreen';
import { validateLocale, type LocaleRouteParams } from './_route-utils/locale';

type HomePageProps = {
  params: Promise<LocaleRouteParams>;
};

const HomePage = async ({ params }: HomePageProps) => {
  await validateLocale(params);
  return <LandingScreen />;
};

export default HomePage;
