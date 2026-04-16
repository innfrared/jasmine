import PlaceholderRoutePage from '@/app/[locale]/_placeholders/PlaceholderRoutePage';
import { type LocaleRouteParams } from '@/app/[locale]/_route-utils/locale';

type RoutePageProps = {
  params: Promise<LocaleRouteParams>;
};

const RoutePage = async ({ params }: RoutePageProps) => {
  return <PlaceholderRoutePage params={params} placeholderId="accessories" />;
};

export default RoutePage;
