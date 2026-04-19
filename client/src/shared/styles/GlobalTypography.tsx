'use client';

import { createGlobalStyle } from 'styled-components';
import { documentRoot, typography } from './typography';

/**
 * Applies default document text styles from the centralized typography system.
 * Must wrap styled-components tree (see app/providers).
 */
export const GlobalTypography = createGlobalStyle`
  html {
    ${documentRoot}
  }

  body {
    ${typography.body}
  }
`;
