import LandingScreen from '@/features/landing/views/LandingScreen';
import { validateLocale, type LocaleRouteParams } from './_route-utils/locale';

type HomePageProps = {
  params: Promise<LocaleRouteParams>;
};

const HomePage = async ({ params }: HomePageProps) => {
  await validateLocale(params);

  if (process.env.DEBUG_MINIMAL_HOME_PAGE === '1') {
    return <p>ok</p>;
  }

  return <LandingScreen />;
};

export default HomePage;
