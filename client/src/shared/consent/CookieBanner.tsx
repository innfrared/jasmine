'use client';

import { useParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  buildLocalizedPath,
  resolveLocale,
} from '@/shared/routing/localeRouting';
import { useCookieConsent } from './useCookieConsent';
import {
  BannerBody,
  BannerLayer,
  CookiePolicyLink,
  BannerPanel,
  BannerTitle,
  ButtonRow,
  GhostButton,
  PreferenceActions,
  PreferenceHint,
  PreferenceLabel,
  PreferenceRow,
  PreferencesBlock,
  PrimaryButton,
  TextButton,
  ToggleButton,
} from './CookieBanner.styles';

const CookieBanner = () => {
  const { t } = useTranslation<'translation'>();
  const params = useParams<{ locale?: string }>();
  const cookiePolicyHref = useMemo(
    () => buildLocalizedPath('/cookie-policy', resolveLocale(params?.locale)),
    [params?.locale]
  );
  const {
    ready,
    hasStoredConsent,
    acceptAll,
    acceptNecessaryOnly,
    savePreferences,
  } = useCookieConsent();

  const [prefsOpen, setPrefsOpen] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [draftMarketing, setDraftMarketing] = useState(false);

  const handleOpenPrefs = useCallback(() => {
    setPrefsOpen(true);
  }, []);

  const handleSavePrefs = useCallback(() => {
    savePreferences({
      analytics: draftAnalytics,
      marketing: draftMarketing,
    });
    setPrefsOpen(false);
  }, [draftAnalytics, draftMarketing, savePreferences]);

  if (!ready || hasStoredConsent) {
    return null;
  }

  return (
    <BannerLayer
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <BannerPanel>
        <BannerTitle id="cookie-consent-title">
          {t('cookieConsent.title')}
        </BannerTitle>
        <BannerBody>
          {t('cookieConsent.description')}{' '}
          <CookiePolicyLink href={cookiePolicyHref}>
            {t('cookieConsent.learnMore')}
          </CookiePolicyLink>
        </BannerBody>
        {!prefsOpen ? (
          <ButtonRow>
            <PrimaryButton type="button" onClick={acceptAll}>
              {t('cookieConsent.acceptAll')}
            </PrimaryButton>
            <GhostButton type="button" onClick={acceptNecessaryOnly}>
              {t('cookieConsent.necessaryOnly')}
            </GhostButton>
            <TextButton type="button" onClick={handleOpenPrefs}>
              {t('cookieConsent.manage')}
            </TextButton>
          </ButtonRow>
        ) : (
          <PreferencesBlock>
            <PreferenceRow>
              <span>
                <PreferenceLabel>
                  {t('cookieConsent.necessaryLabel')}
                </PreferenceLabel>
                <PreferenceHint>
                  {t('cookieConsent.necessaryHint')}
                </PreferenceHint>
              </span>
              <ToggleButton
                type="button"
                disabled
                $pressed={true}
                aria-disabled
              >
                {t('cookieConsent.on')}
              </ToggleButton>
            </PreferenceRow>
            <PreferenceRow>
              <span>
                <PreferenceLabel>
                  {t('cookieConsent.analyticsLabel')}
                </PreferenceLabel>
                <PreferenceHint>
                  {t('cookieConsent.analyticsHint')}
                </PreferenceHint>
              </span>
              <ToggleButton
                type="button"
                $pressed={draftAnalytics}
                aria-pressed={draftAnalytics}
                onClick={() => setDraftAnalytics(v => !v)}
              >
                {draftAnalytics
                  ? t('cookieConsent.on')
                  : t('cookieConsent.off')}
              </ToggleButton>
            </PreferenceRow>
            <PreferenceRow>
              <span>
                <PreferenceLabel>
                  {t('cookieConsent.marketingLabel')}
                </PreferenceLabel>
                <PreferenceHint>
                  {t('cookieConsent.marketingHint')}
                </PreferenceHint>
              </span>
              <ToggleButton
                type="button"
                $pressed={draftMarketing}
                aria-pressed={draftMarketing}
                onClick={() => setDraftMarketing(v => !v)}
              >
                {draftMarketing
                  ? t('cookieConsent.on')
                  : t('cookieConsent.off')}
              </ToggleButton>
            </PreferenceRow>
            <PreferenceActions>
              <PrimaryButton type="button" onClick={handleSavePrefs}>
                {t('cookieConsent.savePreferences')}
              </PrimaryButton>
              <GhostButton type="button" onClick={acceptNecessaryOnly}>
                {t('cookieConsent.necessaryOnly')}
              </GhostButton>
            </PreferenceActions>
          </PreferencesBlock>
        )}
      </BannerPanel>
    </BannerLayer>
  );
};

export default CookieBanner;
