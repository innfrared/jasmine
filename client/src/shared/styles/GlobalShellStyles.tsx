'use client';

import { createGlobalStyle } from 'styled-components';
import { down } from './breakpoints';

/**
 * Shell layout rules that must apply globally to `.storefront-*` classes.
 * Viewport media queries come only from the shared breakpoint module.
 */
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
