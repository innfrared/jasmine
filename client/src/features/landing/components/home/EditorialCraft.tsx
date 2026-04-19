import { useTranslation } from 'react-i18next';
import type { EditorialCraftProps } from '@/shared/types/landingHome';
import {
  CraftPanelDelayed,
  Inner,
  Kicker,
  Section,
  Triptych,
} from './EditorialCraft.styles';

function EditorialCraft({ slides }: EditorialCraftProps) {
  const { t } = useTranslation<'translation'>();
  const [first, second, third] = slides;

  return (
    <Section aria-labelledby="editorial-craft-heading">
      <Inner>
        <Kicker id="editorial-craft-heading">
          {t('landingHome.craft.kicker')}
        </Kicker>
        <Triptych>
          {first ? (
            <CraftPanelDelayed $delay="a">
              <img
                src={first.src}
                alt={first.alt}
                loading="lazy"
                decoding="async"
              />
            </CraftPanelDelayed>
          ) : null}
          {second ? (
            <CraftPanelDelayed $delay="b" $emphasis>
              <img
                src={second.src}
                alt={second.alt}
                loading="lazy"
                decoding="async"
              />
            </CraftPanelDelayed>
          ) : null}
          {third ? (
            <CraftPanelDelayed $delay="c">
              <img
                src={third.src}
                alt={third.alt}
                loading="lazy"
                decoding="async"
              />
            </CraftPanelDelayed>
          ) : null}
        </Triptych>
      </Inner>
    </Section>
  );
}

export default EditorialCraft;
