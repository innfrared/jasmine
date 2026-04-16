import { redirect } from 'next/navigation';
import { DEFAULT_LANGUAGE } from '@/shared/preferences/constants';

const RootPage = () => {
  redirect(`/${DEFAULT_LANGUAGE}`);
};

export default RootPage;
