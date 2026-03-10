import React, { type ComponentType } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  PolicyPageContainer,
  PolicyContent,
  PolicyTitle,
  PolicySection,
} from './PolicyScreen.styles';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;

const TermsConditionsScreen: React.FC = () => {
  return (
    <PolicyPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <PolicyContent>
        <PolicyTitle>Terms & Conditions</PolicyTitle>
        <PolicySection>
          <p>
            By using Jasmine Crafted, you agree to these terms and conditions.
          </p>
          <h2>Orders</h2>
          <p>
            All orders are subject to availability and confirmation of payment.
          </p>
          <h2>Handcrafted nature</h2>
          <p>
            Each piece is handmade, so slight variations are part of the unique
            character of your item.
          </p>
          <h2>Customer support</h2>
          <p>
            For questions about your order, contact our support team and include
            your order ID.
          </p>
        </PolicySection>
      </PolicyContent>
      <Footer />
    </PolicyPageContainer>
  );
};

export default TermsConditionsScreen;
