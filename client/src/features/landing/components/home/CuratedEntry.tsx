'use client';

import type { CuratedEntryProps } from '@/shared/types/landingHome';
import { EditorialCategoryCard } from '@/shared/ui/editorial-category-card';
import { ResponsiveSnapRail } from '@/shared/ui/responsive-snap-rail';
import {
  Description,
  Header,
  Inner,
  Section,
  Title,
} from './CuratedEntry.styles';

const headingId = 'curated-entry-heading';

function CuratedEntry({ title, description, categories }: CuratedEntryProps) {
  return (
    <Section aria-labelledby={headingId}>
      <Inner>
        <Header>
          <Title id={headingId}>{title}</Title>
          {description ? <Description>{description}</Description> : null}
        </Header>
        <ResponsiveSnapRail
          items={categories}
          getItemKey={c => c.id}
          getIndicatorLabel={c => c.title}
          indicatorsGroupAriaLabel={title}
          desktopColumnCount={3}
          renderItem={(category, index) => (
            <EditorialCategoryCard
              href={category.href}
              title={category.title}
              image={category.image}
              overlayVariant={index === 1 ? 'lighter' : 'default'}
            />
          )}
        />
      </Inner>
    </Section>
  );
}

export default CuratedEntry;
