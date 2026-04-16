'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  createConsentState,
  readConsentCookie,
  writeConsentCookie,
  type ConsentState,
} from './cookieConsent';
import {
  enableExternalAnalytics,
  enableExternalMarketing,
} from './analyticsBootstrap';
import {
  CookieConsentContext,
  type CookieConsentContextValue,
} from './CookieConsentContext';

type CookieConsentProviderProps = {
  children: ReactNode;
};

const NECESSARY_TRUE = true as const;

export const CookieConsentProvider = ({
  children,
}: CookieConsentProviderProps) => {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const prevConsentRef = useRef<ConsentState | null>(null);

  useEffect(() => {
    setConsent(readConsentCookie());
    setReady(true);
  }, []);

  const persist = useCallback((next: ConsentState) => {
    writeConsentCookie(next);
    setConsent(next);
  }, []);

  const acceptAll = useCallback(() => {
    persist(
      createConsentState({
        analytics: true,
        marketing: true,
      })
    );
  }, [persist]);

  const acceptNecessaryOnly = useCallback(() => {
    persist(
      createConsentState({
        analytics: false,
        marketing: false,
      })
    );
  }, [persist]);

  const savePreferences = useCallback(
    (prefs: { analytics: boolean; marketing: boolean }) => {
      persist(
        createConsentState({
          analytics: prefs.analytics,
          marketing: prefs.marketing,
        })
      );
    },
    [persist]
  );

  useEffect(() => {
    if (!ready || !consent) return;
    const prev = prevConsentRef.current;
    if (consent.analytics && (!prev || !prev.analytics)) {
      enableExternalAnalytics();
    }
    if (consent.marketing && (!prev || !prev.marketing)) {
      enableExternalMarketing();
    }
    prevConsentRef.current = consent;
  }, [ready, consent]);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      ready,
      consent,
      hasStoredConsent: consent !== null,
      necessary: NECESSARY_TRUE,
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
      acceptAll,
      acceptNecessaryOnly,
      savePreferences,
    }),
    [ready, consent, acceptAll, acceptNecessaryOnly, savePreferences]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};
