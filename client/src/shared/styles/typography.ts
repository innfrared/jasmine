import { css } from 'styled-components';
import { up } from './breakpoints';

export const fontFamilies = {
  sans: 'var(--font-ui)',
  serif: 'var(--font-display)',
  editorialScript: 'var(--font-editorial-script)',
} as const;

/** `rem` root; applied on `html` via `GlobalTypography` only. */
export const documentRoot = css`
  font-size: 100%;
`;

/** Shared responsive steps for nav + button roles (locked scale). */
const navButtonType = css`
  font-family: ${fontFamilies.sans};
  font-size: 0.76rem;
  line-height: 1.28;
  ${up.tablet} {
    font-size: 0.78rem;
  }
  ${up.laptop} {
    font-size: 0.78rem;
  }
  ${up.wide} {
    font-size: 0.8rem;
  }
`;

const pageHeadingCore = css`
  font-family: ${fontFamilies.serif};
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.08;
  letter-spacing: 0.01em;
  ${up.tablet} {
    font-size: 2.4rem;
  }
  ${up.laptop} {
    font-size: 2.4rem;
  }
  ${up.wide} {
    font-size: 3.5rem;
  }
`;

const bodyCore = css`
  font-family: ${fontFamilies.sans};
  font-weight: 400;
  font-size: 0.96rem;
  line-height: 1.5;
  letter-spacing: 0.005em;
  ${up.tablet} {
    font-size: 0.98rem;
  }
  ${up.laptop} {
    font-size: 0.93rem;
  }
  ${up.wide} {
    font-size: 1.3rem;
  }
`;

export const typography = {
  editorialDisplay: css`
    font-family: ${fontFamilies.serif};
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.05;
    letter-spacing: 0.012em;
    text-transform: none;
    ${up.tablet} {
      font-size: 3.4rem;
    }
    ${up.laptop} {
      font-size: 3.15rem;
    }
    ${up.wide} {
      font-size: 3.5rem;
    }
  `,
  pageHeading: css`
    ${pageHeadingCore}
    text-transform: none;
  `,
  pageHeadingCapitalized: css`
    ${pageHeadingCore}
    text-transform: capitalize;
  `,
  sectionHeading: css`
    font-family: ${fontFamilies.sans};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.14;
    letter-spacing: 0.01em;
    text-transform: none;
    ${up.tablet} {
      font-size: 1.3rem;
    }
    ${up.laptop} {
      font-size: 1.28rem;
    }
    ${up.wide} {
      font-size: 1.58rem;
    }
  `,
  body: css`
    ${bodyCore}
  `,
  bodyStrong: css`
    ${bodyCore}
    font-weight: 500;
  `,
  bodySmall: css`
    font-family: ${fontFamilies.sans};
    font-weight: 400;
    font-size: 0.86rem;
    line-height: 1.55;
    letter-spacing: 0.02em;
    ${up.tablet} {
      font-size: 0.89rem;
    }
    ${up.laptop} {
      font-size: 0.86rem;
    }
    ${up.wide} {
      font-size: 0.94rem;
    }
  `,
  bodySmallCaps: css`
    font-family: ${fontFamilies.sans};
    font-weight: 400;
    font-size: 0.86rem;
    line-height: 1.34;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    ${up.tablet} {
      font-size: 0.89rem;
    }
    ${up.laptop} {
      font-size: 0.86rem;
    }
    ${up.wide} {
      font-size: 0.94rem;
    }
  `,
  bodySmallStrong: css`
    font-family: ${fontFamilies.sans};
    font-weight: 500;
    font-size: 0.86rem;
    line-height: 1.55;
    letter-spacing: 0.02em;
    ${up.tablet} {
      font-size: 0.89rem;
    }
    ${up.laptop} {
      font-size: 0.86rem;
    }
    ${up.wide} {
      font-size: 0.94rem;
    }
  `,
  bodySmallCapitalized: css`
    font-family: ${fontFamilies.sans};
    font-weight: 400;
    font-size: 0.86rem;
    line-height: 1.55;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    ${up.tablet} {
      font-size: 0.89rem;
    }
    ${up.laptop} {
      font-size: 0.86rem;
    }
    ${up.wide} {
      font-size: 0.94rem;
    }
  `,
  label: css`
    font-family: ${fontFamilies.sans};
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 1.28;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    ${up.tablet} {
      font-size: 0.72rem;
    }
    ${up.laptop} {
      font-size: 0.71rem;
    }
    ${up.wide} {
      font-size: 0.75rem;
    }
  `,
  utility: css`
    font-family: ${fontFamilies.sans};
    font-weight: 400;
    font-size: 0.66rem;
    line-height: 1.28;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    ${up.tablet} {
      font-size: 0.68rem;
    }
    ${up.laptop} {
      font-size: 0.67rem;
    }
    ${up.wide} {
      font-size: 0.72rem;
    }
  `,
  /** Compact numeric glyphs (currency codes, counters) — not uppercase. */
  badgeNumeric: css`
    font-family: ${fontFamilies.sans};
    font-weight: 600;
    font-size: 0.66rem;
    line-height: 1;
    letter-spacing: 0.04em;
    text-transform: none;
    ${up.tablet} {
      font-size: 0.68rem;
    }
    ${up.laptop} {
      font-size: 0.67rem;
    }
    ${up.wide} {
      font-size: 0.72rem;
    }
  `,
  badgeNumericBold: css`
    font-family: ${fontFamilies.sans};
    font-weight: 700;
    font-size: 0.66rem;
    line-height: 1;
    letter-spacing: 0.04em;
    text-transform: none;
    ${up.tablet} {
      font-size: 0.68rem;
    }
    ${up.laptop} {
      font-size: 0.67rem;
    }
    ${up.wide} {
      font-size: 0.72rem;
    }
  `,
  nav: css`
    ${navButtonType}
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  button: css`
    ${navButtonType}
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  /** Primary CTAs that use heavier weight than default buttons. */
  buttonBold: css`
    ${navButtonType}
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  /** Decorative script lines; matches editorial display scale. */
  editorialScriptHeading: css`
    font-family: ${fontFamilies.editorialScript};
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 0.92;
    letter-spacing: 0;
    text-transform: none;
    ${up.tablet} {
      font-size: 3.4rem;
    }
    ${up.laptop} {
      font-size: 3.15rem;
    }
    ${up.wide} {
      font-size: 4.75rem;
    }
  `,
} as const;
