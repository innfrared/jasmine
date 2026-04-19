import Button from '@/shared/ui/button';
import type { EditorialClosingProps } from '@/shared/types/landingHome';
import {
  ClosingCtaRow,
  ClosingEyebrow,
  ClosingHeadline,
  ClosingNote,
  ClosingSupporting,
  ClosingTextBlock,
  Inner,
  Section,
  StatementBlock,
  StatementHeadline,
  StatementLine,
  TriptychCopy,
  TriptychGrid,
  TriptychIntro,
  TriptychPanel,
} from './EditorialClosing.styles';

function EditorialClosing(props: EditorialClosingProps) {
  if (props.mode === 'triptych') {
    const {
      panels,
      eyebrow,
      headline,
      supporting1,
      supporting2,
      note,
      ctaLabel,
      ctaHref,
    } = props;

    const [left, center, right] = panels;

    return (
      <Section aria-labelledby="editorial-closing-headline">
        <Inner>
          <TriptychIntro>
            <ClosingEyebrow>{eyebrow}</ClosingEyebrow>
            <ClosingHeadline id="editorial-closing-headline">
              {headline}
            </ClosingHeadline>
          </TriptychIntro>

          <TriptychGrid>
            <TriptychPanel>
              <img
                src={left.src}
                alt={left.alt}
                loading="lazy"
                decoding="async"
              />
            </TriptychPanel>

            <TriptychPanel $emphasis>
              <img
                src={center.src}
                alt={center.alt}
                loading="lazy"
                decoding="async"
              />
            </TriptychPanel>

            <TriptychPanel>
              <img
                src={right.src}
                alt={right.alt}
                loading="lazy"
                decoding="async"
              />
            </TriptychPanel>
          </TriptychGrid>

          <TriptychCopy>
            <div>
              <ClosingNote>{note}</ClosingNote>
            </div>

            <ClosingTextBlock>
              <ClosingSupporting>{supporting1}</ClosingSupporting>
              <ClosingSupporting>{supporting2}</ClosingSupporting>

              {ctaLabel && ctaHref ? (
                <ClosingCtaRow>
                  <Button
                    variant="link"
                    size="sm"
                    href={ctaHref}
                    className="closing-cta-subtle"
                  >
                    {ctaLabel}
                  </Button>
                </ClosingCtaRow>
              ) : null}
            </ClosingTextBlock>
          </TriptychCopy>
        </Inner>
      </Section>
    );
  }

  if (props.mode === 'statement') {
    const { headline, line, ctaLabel, ctaHref } = props;
    return (
      <Section aria-labelledby="editorial-closing-heading">
        <Inner>
          <StatementBlock>
            <StatementHeadline id="editorial-closing-heading">
              {headline}
            </StatementHeadline>
            {line ? <StatementLine>{line}</StatementLine> : null}
            {ctaLabel && ctaHref ? (
              <ClosingCtaRow>
                <Button variant="link" size="sm" href={ctaHref}>
                  {ctaLabel}
                </Button>
              </ClosingCtaRow>
            ) : null}
          </StatementBlock>
        </Inner>
      </Section>
    );
  }

  const { headline, line, ctaLabel, ctaHref } = props;
  return (
    <Section aria-labelledby="editorial-closing-heading">
      <Inner>
        <StatementBlock>
          <StatementHeadline id="editorial-closing-heading">
            {headline}
          </StatementHeadline>
          {line ? <StatementLine>{line}</StatementLine> : null}
          {ctaLabel && ctaHref ? (
            <ClosingCtaRow>
              <Button variant="link" size="sm" href={ctaHref}>
                {ctaLabel}
              </Button>
            </ClosingCtaRow>
          ) : null}
        </StatementBlock>
      </Inner>
    </Section>
  );
}

export default EditorialClosing;