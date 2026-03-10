'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../ui/styles/button/Button';
import {
  AccountBoxContainer,
  AccountDetails,
  Actions,
  VerticalLine,
} from './AccountBox.styles';

export default function AccountBox({
  isVisible,
  onCloseAccountBox,
  onOpenLoginPopup,
  onOpenRegisterPopup,
}: {
  isVisible: boolean;
  onCloseAccountBox: () => void;
  onOpenLoginPopup: () => void;
  onOpenRegisterPopup: () => void;
}) {
  const { t } = useTranslation<'translation'>();
  const isLoggedIn = false;

  return (
    <AccountBoxContainer $visible={isVisible}>
      {isLoggedIn ? (
        <AccountDetails>
          <p>{t('welcome_user')}</p>
          <button type="button">{t('manage_account')}</button>
        </AccountDetails>
      ) : (
        <AccountDetails>
          <p>{t('not_logged_in')}</p>
          <Actions>
            <Button
              variant={'primary'}
              onClick={() => {
                onCloseAccountBox();
                onOpenLoginPopup();
              }}
            >
              {t('login')}
            </Button>
            <VerticalLine />
            <Button
              variant={'primary'}
              onClick={() => {
                onCloseAccountBox();
                onOpenRegisterPopup();
              }}
            >
              {t('signup')}
            </Button>
          </Actions>
        </AccountDetails>
      )}
    </AccountBoxContainer>
  );
}
