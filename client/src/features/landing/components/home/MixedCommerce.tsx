import { useTranslation } from 'react-i18next';
import type { MixedCommerceProps } from '@/shared/types/landingHome';
import {
  Eyebrow,
  Inner,
  Section,
  SignatureCopy,
  SignatureArticle,
  SignatureMedia,
  SignatureSubtitle,
  SignatureTitle,
  StoryGrid,
  SupportArticle,
  SupportMedia,
  SupportTitle,
  SupportingList,
} from './MixedCommerce.styles';

function MixedCommerce({ signature, supporting }: MixedCommerceProps) {
  const { t } = useTranslation<'translation'>();
  const [a, b] = supporting;

  return (
    <Section aria-labelledby="signature-story-heading">
      <Inner>
        <Eyebrow id="signature-story-heading">
          {t('landingHome.mixed.eyebrow')}
        </Eyebrow>
        <StoryGrid>
          <SignatureArticle href={signature.href}>
            <SignatureMedia>
              <img
                src={signature.image.src}
                alt={signature.image.alt}
                loading="lazy"
                decoding="async"
              />
            </SignatureMedia>
            <SignatureCopy>
              <SignatureTitle>{signature.title}</SignatureTitle>
              {signature.subtitle ? (
                <SignatureSubtitle>{signature.subtitle}</SignatureSubtitle>
              ) : null}
            </SignatureCopy>
          </SignatureArticle>

          <SupportingList>
            <SupportArticle href={a.href}>
              <SupportMedia>
                <img
                  src={a.image.src}
                  alt={a.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </SupportMedia>
              <SupportTitle>{a.title}</SupportTitle>
            </SupportArticle>
            <SupportArticle href={b.href}>
              <SupportMedia>
                <img
                  src={b.image.src}
                  alt={b.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </SupportMedia>
              <SupportTitle>{b.title}</SupportTitle>
            </SupportArticle>
          </SupportingList>
        </StoryGrid>
      </Inner>
    </Section>
  );
}

export default MixedCommerce;
