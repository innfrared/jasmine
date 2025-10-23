import React, { useState } from 'react';
import styles from './RegisterPopup.module.css';
import { useTranslation } from 'react-i18next';
import Input from '../../../ui/styles/input/Input';
import Button from '../../../ui/styles/button/Button';
import CloseButton from '../../../ui/styles/closeButton/CloseButton';

export default function RegisterPopup({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation<'translation'>();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Close the popup after the animation
    }, 300); // Match the animation duration
  };

  return (
    <div className={`${styles.backdrop} ${isClosing ? styles.fadeOut : ''}`}>
      <div className={`${styles.popup} ${isClosing ? styles.fadeOut : ''}`}>
        <div className={styles.popupContent}>
          <h2>{t('signup')}</h2>
          <Input
            label="Full Name"
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <Input
            label="Email"
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <Input
            label="Phone"
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <Input
            label="Confirm Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <Button variant={'primary'} onClick={() => {}}>
            {t('signup')}
          </Button>
        </div>
        <div>
          <CloseButton onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}
