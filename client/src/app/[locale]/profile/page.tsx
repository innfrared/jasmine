import ProfileScreen from '@/features/profile/views/ProfileScreen';
import { validateLocale, type LocaleRouteParams } from '../_route-utils/locale';

type ProfilePageProps = {
  params: Promise<LocaleRouteParams>;
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  await validateLocale(params);
  return <ProfileScreen />;
};

export default ProfilePage;
