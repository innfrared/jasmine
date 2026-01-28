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

const ShippingPolicyScreen: React.FC = () => {
  return (
    <PolicyPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <PolicyContent>
        <PolicyTitle>Shipping Policy</PolicyTitle>
        <PolicySection>
          <p>
            We prepare each Jasmine Crafted order by hand. Shipping timelines
            depend on item availability and your delivery location.
          </p>
          <h2>Processing times</h2>
          <ul>
            <li>Made-to-order items: 3–7 business days.</li>
            <li>Ready-to-ship items: 1–2 business days.</li>
          </ul>
          <h2>Shipping options</h2>
          <p>
            Shipping methods and estimates are shown at checkout based on your
            address.
          </p>
          <h2>Delivery updates</h2>
          <p>
            You will receive a confirmation message with tracking details once
            your order ships.
          </p>
        </PolicySection>
      </PolicyContent>
      <Footer />
    </PolicyPageContainer>
  );
};

export default ShippingPolicyScreen;
