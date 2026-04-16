import { css } from 'styled-components';

export const fontFamilies = {
  sans: 'var(--font-ui)',
  serif: 'var(--font-display)',
  editorialScript: 'var(--font-editorial-script)',
} as const;

export const typography = {
  body: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-body);
    line-height: var(--leading-body);
    letter-spacing: 0.01em;
  `,
  bodySmall: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-body-sm);
    line-height: var(--leading-body-sm);
    letter-spacing: 0.02em;
  `,
  utility: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-utility);
    line-height: 1.45;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  `,
  label: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-label);
    line-height: 1.25;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  `,
  button: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-button);
    line-height: 1;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  nav: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-nav);
    line-height: 1;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  `,
  sectionHeading: css`
    font-family: ${fontFamilies.sans};
    font-size: var(--text-section-heading);
    line-height: 1.1;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  pageHeading: css`
    font-family: ${fontFamilies.serif};
    font-size: var(--text-page-heading);
    line-height: 0.96;
    letter-spacing: 0.03em;
    font-weight: 400;
  `,
  editorialDisplay: css`
    font-family: ${fontFamilies.serif};
    font-size: var(--text-editorial-display);
    line-height: 0.92;
    letter-spacing: 0.03em;
    font-weight: 400;
  `,
  editorialScriptHeading: css`
    font-family: ${fontFamilies.editorialScript};
    font-weight: 400;
    letter-spacing: 0;
  `,
} as const;
