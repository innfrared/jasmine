import EditorialCta from './EditorialCta';
import type { HeroEditorialProps } from './editorial.types';
import {
  HeroEditorialBody,
  HeroEditorialContent,
  HeroEditorialHeadline,
  HeroEditorialInner,
  HeroEditorialMedia,
  HeroEditorialOverlay,
  HeroEditorialSection,
} from './HeroEditorial.styles';

function HeroEditorial({
  headline,
  body,
  ctaLabel,
  ctaHref,
  image,
}: HeroEditorialProps) {
  return (
    <HeroEditorialSection>
      <HeroEditorialMedia
        src={image.src}
        alt={image.alt}
        loading="eager"
        $desktopPosition={image.focalPointDesktop}
        $mobilePosition={image.focalPointMobile}
      />
      <HeroEditorialOverlay />
      <HeroEditorialInner>
        <HeroEditorialContent>
          <HeroEditorialHeadline>{headline}</HeroEditorialHeadline>
          <HeroEditorialBody>{body}</HeroEditorialBody>
          <EditorialCta href={ctaHref} tone="light">
            {ctaLabel}
          </EditorialCta>
        </HeroEditorialContent>
      </HeroEditorialInner>
    </HeroEditorialSection>
  );
}

export default HeroEditorial;
