import { createContext } from 'react';
import type { ConsentState } from './cookieConsent';

export type CookieConsentContextValue = {
  ready: boolean;
  /** Null until first client read; then either valid consent or stays null if absent (banner). */
  consent: ConsentState | null;
  hasStoredConsent: boolean;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  acceptAll: () => void;
  acceptNecessaryOnly: () => void;
  savePreferences: (prefs: { analytics: boolean; marketing: boolean }) => void;
};

export const CookieConsentContext =
  createContext<CookieConsentContextValue | null>(null);
