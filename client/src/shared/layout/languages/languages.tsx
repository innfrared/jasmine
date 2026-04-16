'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { type AppLanguage } from '../../../i18n';
import { persistLanguagePreference } from '@/shared/preferences/clientPreferences';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import Dropdown, {
  type DropdownOption,
} from '@/shared/ui/dropdown/Dropdown';
import {
  LanguageFlagImage,
  LanguageLabelText,
  LanguageTriggerContent,
  SelectedLanguageFlag,
} from './languages.styles';

const createFlagIcon = (src: string) => (
  <LanguageFlagImage src={src} alt="" aria-hidden="true" />
);

type LanguagesProps = {
  isScrolled?: boolean;
  width?: string;
  menuMinWidth?: string;
  showLabel?: boolean;
  labelMode?: 'short' | 'full';
};

export default function Languages({
  isScrolled = false,
  width = '40px',
  menuMinWidth = '85px',
  showLabel = false,
  labelMode = 'short',
}: LanguagesProps) {
  const { i18n, t } = useTranslation<'translation'>();
  const router = useRouter();
  const { getPathForLocale } = useLocalizedRouting();
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;

  const languageOptions: DropdownOption[] = [
    {
      value: 'en',
      label: labelMode === 'full' ? t('footer.languages.en') : 'Eng',
      icon: createFlagIcon('/assets/englang.png'),
    },
    {
      value: 'ru',
      label: labelMode === 'full' ? t('footer.languages.ru') : 'Rus',
      icon: createFlagIcon('/assets/ruslang.png'),
    },
    {
      value: 'am',
      label: labelMode === 'full' ? t('footer.languages.am') : 'Arm',
      icon: createFlagIcon('/assets/armlang.png'),
    },
  ];

  const changeLanguage = (languageCode: AppLanguage) => {
    persistLanguagePreference(languageCode);
    void i18n.changeLanguage(languageCode);
    router.replace(getPathForLocale(languageCode), { scroll: false });
  };

  const handleDropdownChange = (value: string | undefined) => {
    if (!value) {
      return;
    }

    changeLanguage(value as AppLanguage);
  };

  const renderTriggerContent = (selected?: DropdownOption) => {
    if (!selected?.icon) {
      return null;
    }

    if (!showLabel) {
      return <SelectedLanguageFlag>{selected.icon}</SelectedLanguageFlag>;
    }

    return (
      <LanguageTriggerContent>
        <SelectedLanguageFlag>{selected.icon}</SelectedLanguageFlag>
        <LanguageLabelText>{selected.label}</LanguageLabelText>
      </LanguageTriggerContent>
    );
  };

  return (
    <Dropdown
      options={languageOptions}
      value={activeLanguage}
      onChange={handleDropdownChange}
      placeholder="Language"
      width={width}
      menuMinWidth={menuMinWidth}
      searchable={false}
      ariaLabel="Select language"
      allowClear={false}
      isScrolled={isScrolled}
      renderTriggerContent={renderTriggerContent}
    />
  );
}
