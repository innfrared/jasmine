import { Suspense } from 'react';
import LoginScreen from '../../../src/presentation/screen/login/LoginScreen';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <LoginScreen />
  </Suspense>
  );
}
