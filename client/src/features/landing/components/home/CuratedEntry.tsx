import type { CuratedEntryProps } from '@/shared/types/landingHome';
import {
  ComposeGrid,
  DominantDescriptor,
  DominantLabel,
  DominantLink,
  DominantMedia,
  DominantTitle,
  Inner,
  Section,
  SupportLabel,
  SupportLink,
  SupportMedia,
  SupportStack,
  VisuallyHiddenHeading,
} from './CuratedEntry.styles';

function CuratedEntry({ dominant, supporting }: CuratedEntryProps) {
  return (
    <Section aria-labelledby="curated-entry-heading">
      <Inner>
        <VisuallyHiddenHeading id="curated-entry-heading">
          {dominant.title}
        </VisuallyHiddenHeading>
        <ComposeGrid>
          <DominantLink href={dominant.href}>
            <DominantMedia>
              <img
                src={dominant.image.src}
                alt={dominant.image.alt}
                loading="lazy"
                decoding="async"
              />
            </DominantMedia>
            <DominantLabel>
              <DominantTitle>{dominant.title}</DominantTitle>
              {dominant.descriptor ? (
                <DominantDescriptor>{dominant.descriptor}</DominantDescriptor>
              ) : null}
            </DominantLabel>
          </DominantLink>

          <SupportStack>
            {supporting.map(entry => (
              <SupportLink key={entry.id} href={entry.href}>
                <SupportMedia>
                  <img
                    src={entry.image.src}
                    alt={entry.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </SupportMedia>
                <SupportLabel>{entry.title}</SupportLabel>
              </SupportLink>
            ))}
          </SupportStack>
        </ComposeGrid>
      </Inner>
    </Section>
  );
}

export default CuratedEntry;
