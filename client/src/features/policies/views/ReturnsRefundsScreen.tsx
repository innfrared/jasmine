'use client';

import type { ComponentType } from 'react';
import Header from '@/shared/layout/header/Header';
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

const ReturnsRefundsScreen = () => {
  return (
    <PolicyPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <PolicyContent>
        <PolicyTitle>Returns &amp; Refunds</PolicyTitle>
        <PolicySection>
          <p>
            We want you to love your handcrafted purchase. If something is not
            right, we will work with you to make it right.
          </p>
          <h2>Return window</h2>
          <p>Returns are accepted within 14 days of delivery.</p>
          <h2>Condition of items</h2>
          <p>
            Items must be unused and returned in their original packaging to be
            eligible for a refund.
          </p>
          <h2>Refunds</h2>
          <p>
            Once your return is received and inspected, we will issue a refund
            to your original payment method.
          </p>
        </PolicySection>
      </PolicyContent>
    </PolicyPageContainer>
  );
};

export default ReturnsRefundsScreen;
