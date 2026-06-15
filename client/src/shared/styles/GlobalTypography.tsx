'use client';

import { createGlobalStyle } from 'styled-components';
import { documentRoot, typography } from './typography';

export const GlobalTypography = createGlobalStyle`
  html {
    ${documentRoot}
  }

  body {
    ${typography.body}
  }
`;
