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

const PrivacyPolicyScreen: React.FC = () => {
  return (
    <PolicyPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <PolicyContent>
        <PolicyTitle>Privacy Policy</PolicyTitle>
        <PolicySection>
          <p>
            We collect only the information needed to process orders and support
            your experience with Jasmine Crafted.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Contact details to fulfill your order.</li>
            <li>Shipping address for delivery.</li>
            <li>Order history for customer support.</li>
          </ul>
          <h2>How we use your data</h2>
          <p>
            We use your data to process orders, communicate order updates, and
            improve the shopping experience.
          </p>
          <h2>Data security</h2>
          <p>
            We take reasonable measures to protect your personal information and
            do not sell your data.
          </p>
        </PolicySection>
      </PolicyContent>
      <Footer />
    </PolicyPageContainer>
  );
};

export default PrivacyPolicyScreen;
