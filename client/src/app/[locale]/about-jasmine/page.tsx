import AboutJasmineScreen from '@/features/about/views/AboutJasmineScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type AboutJasminePageProps = {
  params: Promise<LocaleRouteParams>;
};

const AboutJasminePage = async ({ params }: AboutJasminePageProps) => {
  await validateLocale(params);
  return <AboutJasmineScreen />;
};

export default AboutJasminePage;
