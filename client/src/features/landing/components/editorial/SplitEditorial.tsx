import EditorialCta from './EditorialCta';
import type { SplitEditorialProps } from './editorial.types';
import {
  SplitEditorialHeading,
  SplitEditorialInner,
  SplitEditorialInfo,
  SplitEditorialInfoBody,
  SplitEditorialMainImage,
  SplitEditorialPrimaryRow,
  SplitEditorialSecondaryGrid,
  SplitEditorialSecondaryImage,
  SplitEditorialSecondaryRow,
  SplitEditorialPrimaryImage,
  SplitEditorialSection,
} from './SplitEditorial.styles';

function SplitEditorial({
  headline,
  body,
  ctaLabel,
  ctaHref,
  image,
  supportingImages = [],
}: SplitEditorialProps) {
  return (
    <SplitEditorialSection>
      <SplitEditorialInner>
        <SplitEditorialPrimaryRow>
          <SplitEditorialHeading>{headline}</SplitEditorialHeading>
          <SplitEditorialMainImage>
            <SplitEditorialPrimaryImage
              src={image.src}
              alt={image.alt}
              loading="lazy"
              $desktopPosition={image.focalPointDesktop}
              $mobilePosition={image.focalPointMobile}
              $aspectRatio={image.aspectRatio}
              $minHeight={image.minHeight}
            />
          </SplitEditorialMainImage>
        </SplitEditorialPrimaryRow>

        <SplitEditorialSecondaryRow>
          <SplitEditorialSecondaryGrid>
            {supportingImages.map(supportingImage => (
              <SplitEditorialSecondaryImage
                key={`${supportingImage.src}-${supportingImage.alt}`}
                src={supportingImage.src}
                alt={supportingImage.alt}
                loading="lazy"
                $desktopPosition={supportingImage.focalPointDesktop}
                $mobilePosition={supportingImage.focalPointMobile}
                $aspectRatio={supportingImage.aspectRatio}
                $minHeight={supportingImage.minHeight}
              />
            ))}
          </SplitEditorialSecondaryGrid>

          <SplitEditorialInfo>
            <SplitEditorialInfoBody>{body}</SplitEditorialInfoBody>
            <EditorialCta href={ctaHref}>{ctaLabel}</EditorialCta>
          </SplitEditorialInfo>
        </SplitEditorialSecondaryRow>
      </SplitEditorialInner>
    </SplitEditorialSection>
  );
}

export default SplitEditorial;
