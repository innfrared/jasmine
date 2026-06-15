'use client';

import { createGlobalStyle } from 'styled-components';
import { down } from './breakpoints';

export const GlobalShellStyles = createGlobalStyle`
  ${down.tablet} {
    .storefront-main-layer {
      padding-bottom: 0;
    }

    .storefront-footer-reveal-layer {
      position: relative;
      left: auto;
      right: auto;
      bottom: auto;
      height: auto;
    }

    .storefront-footer-reveal-inner {
      height: auto;
    }
  }
`;
