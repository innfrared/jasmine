import { notFound } from 'next/navigation';
import PlaceholderPageScreen from '@/features/placeholders/views/PlaceholderPageScreen';
import { PLACEHOLDER_PAGE_CONFIGS } from '@/shared/config/placeholders';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type PlaceholderRoutePageProps = {
  params: Promise<LocaleRouteParams>;
  placeholderId: string;
};

const PlaceholderRoutePage = async ({
  params,
  placeholderId,
}: PlaceholderRoutePageProps) => {
  await validateLocale(params);
  const page = PLACEHOLDER_PAGE_CONFIGS.find(item => item.id === placeholderId);

  if (!page) {
    notFound();
  }

  return <PlaceholderPageScreen page={page} />;
};

export default PlaceholderRoutePage;
