import Button from '@/shared/ui/button';
import type { EditorialManifestoProps } from '@/shared/types/landingHome';
import {
  CopyBlock,
  CtaWrap,
  Figure,
  Headline,
  Inner,
  Kicker,
  Line,
  Section,
} from './EditorialManifesto.styles';

function EditorialManifesto({
  kicker,
  headline,
  line,
  layout,
  image,
  ctaLabel,
  ctaHref,
}: EditorialManifestoProps) {
  return (
    <Section $layout={layout} aria-labelledby="editorial-manifesto-headline">
      <Inner $layout={layout}>
        <Figure $layout={layout}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
        </Figure>
        <CopyBlock $layout={layout}>
          {kicker ? <Kicker>{kicker}</Kicker> : null}
          <Headline id="editorial-manifesto-headline">{headline}</Headline>
          {line ? <Line>{line}</Line> : null}
          {ctaLabel && ctaHref ? (
            <CtaWrap>
              <Button variant="link" size="sm" href={ctaHref}>
                {ctaLabel}
              </Button>
            </CtaWrap>
          ) : null}
        </CopyBlock>
      </Inner>
    </Section>
  );
}

export default EditorialManifesto;
