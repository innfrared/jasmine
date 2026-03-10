'use client';

import React, { useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import LoginPopup from '../../components/loginPopup/LoginPopup';
import RegisterPopup from '../../components/registerPopup/RegisterPopup';
import { normalizeLocale, withLocale } from '../../../utils/locale';

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const searchParams = useSearchParams();
  const locale = normalizeLocale(params?.locale);

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const redirectTo = searchParams.get('redirect');

  const handleClose = () => {
    const safeRedirect =
      redirectTo &&
      !redirectTo.startsWith('http') &&
      !redirectTo.startsWith('//')
        ? `/${redirectTo.replace(/^\/+/, '')}`
        : '/';

    router.push(withLocale(locale, safeRedirect));
  };

  return mode === 'login' ? (
    <LoginPopup
      onClose={handleClose}
      onOpenRegister={() => setMode('register')}
    />
  ) : (
    <RegisterPopup
      onClose={handleClose}
      onOpenLogin={() => setMode('login')}
    />
  );
};

export default LoginScreen;