import React from 'react';
import styles from './AccountBox.module.css';
import { useTranslation } from 'react-i18next';
import Button from '../../../ui/styles/button/Button';

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
    <div className={`${styles.accountBox} ${isVisible ? styles.visible : ''}`}>
      {isLoggedIn ? (
        <div className={styles.accountDetails}>
          <p>{t('welcome_user')}</p>
          <button className={styles.manageAccountButton}>
            {t('manage_account')}
          </button>
        </div>
      ) : (
        <div className={styles.accountDetails}>
          <p>{t('not_logged_in')}</p>
          <div className={styles.actions}>
            <Button
              variant={'primary'}
              onClick={() => {
                onCloseAccountBox();
                onOpenLoginPopup();
              }}
            >
              {t('login')}
            </Button>
            <div className={styles.verticalLine}></div>
            <Button
              variant={'primary'}
              onClick={() => {
                onCloseAccountBox();
                onOpenRegisterPopup();
              }}
            >
              {t('signup')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
