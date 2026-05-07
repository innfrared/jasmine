'use client';

import dynamic from 'next/dynamic';
import type { AuthDialog } from './headerState';

const LoginPopup = dynamic(() => import('../loginPopup/LoginPopup'), {
  ssr: false,
});

const RegisterPopup = dynamic(() => import('../registerPopup/RegisterPopup'), {
  ssr: false,
});

type HeaderDialogsProps = {
  authDialog: AuthDialog;
  onCloseAuthDialog: () => void;
  onSwitchFromLoginToRegister: () => void;
  onSwitchFromRegisterToLogin: () => void;
};

export default function HeaderDialogs({
  authDialog,
  onCloseAuthDialog,
  onSwitchFromLoginToRegister,
  onSwitchFromRegisterToLogin,
}: HeaderDialogsProps) {
  return (
    <>
      {authDialog === 'login' ? (
        <LoginPopup
          onClose={onCloseAuthDialog}
          onOpenRegister={onSwitchFromLoginToRegister}
        />
      ) : null}
      {authDialog === 'register' ? (
        <RegisterPopup
          onClose={onCloseAuthDialog}
          onOpenLogin={onSwitchFromRegisterToLogin}
        />
      ) : null}
    </>
  );
}
