'use client';

import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import {
  PaymentContainer,
  PaymentTitle,
  PaymentText,
  PaymentNote,
} from './PaymentScreen.styles';
import { useThemeColors } from '../../hooks/useThemeColors';

const PaymentScreen: React.FC = () => {
  const { primaryColor, secondaryColor } = useThemeColors();

  return (
    <>
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <PaymentContainer>
        <Breadcrumb />
        <PaymentTitle>Payment</PaymentTitle>
        <PaymentText>
          Payment is handled securely during checkout. Choose your preferred
          payment method when placing your order.
        </PaymentText>
        <PaymentNote>
          If you have any questions about available payment methods, please
          reach out to our support team.
        </PaymentNote>
      </PaymentContainer>
      <Footer />
    </>
  );
};

export default PaymentScreen;
