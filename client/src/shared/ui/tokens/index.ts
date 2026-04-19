import { fontFamilies } from '../../styles/typography';

export const uiColors = {
  ink: '#1a1411',
  inkElevated: '#2a201c',
  inkStrong: '#221813',
  inkSoft: '#5c4b3a',
  inkMuted: '#6f6256',
  inkSubtle: '#8b755e',
  inkInverse: '#f8f4ee',
  ivory: '#f8f2ea',
  surface: '#ffffff',
  surfaceSoft: 'rgba(255, 255, 255, 0.74)',
  surfaceStronger: 'rgba(255, 255, 255, 0.96)',
  surfaceGlass: 'rgba(255, 255, 255, 0.84)',
  surfaceWarm: '#f6f1ea',
  surfaceWarmStrong: '#fdfaf6',
  borderSoft: 'rgba(44, 31, 20, 0.08)',
  border: 'rgba(44, 31, 20, 0.14)',
  borderStrong: 'rgba(44, 31, 20, 0.2)',
  borderCool: 'rgba(44, 58, 79, 0.16)',
  borderCoolStrong: 'rgba(44, 58, 79, 0.26)',
  gold: '#d4af37',
  goldSoft: 'rgba(212, 175, 55, 0.12)',
  wishlist: '#8c2f4d',
  wishlistHover: '#a33157',
  navy: '#001f3f',
  navySoft: '#314459',
  navyElevated: '#243447',
  navyInk: '#394a5d',
  navyMuted: 'rgba(0, 31, 63, 0.7)',
  white: '#ffffff',
  whiteSoft: 'rgba(255, 255, 255, 0.12)',
  footerReveal: '#0b1231',
  surfaceHomeLightA: '#ece9e3',
  surfaceHomeLightB: '#dbd5c9',
  surfaceHomeDark: '#1c1a19',
  surfaceHomeDarkElevated: '#252220',
} as const;

export const uiMotion = {
  easeSoft: 'cubic-bezier(0.33, 1, 0.68, 1)',
  hover: '520ms cubic-bezier(0.33, 1, 0.68, 1)',
  hoverSlow: '620ms cubic-bezier(0.33, 1, 0.68, 1)',
  drift: '7.5s ease-in-out',
} as const;

export const uiRadii = {
  sm: '8px',
  md: '12px',
  lg: '24px',
  pill: '999px',
} as const;

export const uiShadows = {
  button: '0 12px 24px rgba(27, 39, 54, 0.16)',
  buttonSoft: '0 10px 18px rgba(34, 46, 60, 0.08)',
  card: '0 20px 32px rgba(44, 31, 20, 0.05), 0 6px 12px rgba(44, 31, 20, 0.04)',
  cardHover:
    '0 22px 36px rgba(44, 31, 20, 0.07), 0 10px 20px rgba(44, 31, 20, 0.05)',
  drawer:
    '-24px 0 56px rgba(21, 15, 12, 0.14), -8px 0 24px rgba(21, 15, 12, 0.08)',
} as const;

export const uiTypography = {
  sans: fontFamilies.sans,
  serif: fontFamilies.serif,
} as const;

export const uiFocusRing = '0 0 0 4px rgba(64, 81, 103, 0.18)';
