import EditorialCta from './EditorialCta';
import type { GridEditorialProps } from './editorial.types';
import {
  GridEditorialHeader,
  GridEditorialHeading,
  GridEditorialImage,
  GridEditorialInner,
  GridEditorialSection,
  GridEditorialTile,
  GridEditorialTileLabel,
  GridEditorialTileOverlay,
  GridEditorialTiles,
} from './GridEditorial.styles';

function GridEditorial({
  heading,
  ctaLabel,
  ctaHref,
  items,
}: GridEditorialProps) {
  return (
    <GridEditorialSection>
      <GridEditorialInner>
        <GridEditorialHeader>
          <GridEditorialHeading>{heading}</GridEditorialHeading>
          <EditorialCta href={ctaHref}>{ctaLabel}</EditorialCta>
        </GridEditorialHeader>

        <GridEditorialTiles>
          {items.map(item => (
            <GridEditorialTile
              key={item.id}
              href={item.href}
              $sizeVariant={item.image.sizeVariant}
            >
              <GridEditorialImage
                src={item.image.src}
                alt={item.image.alt}
                loading="lazy"
                $desktopPosition={item.image.focalPointDesktop}
                $mobilePosition={item.image.focalPointMobile}
              />
              <GridEditorialTileOverlay />
              <GridEditorialTileLabel>{item.title}</GridEditorialTileLabel>
            </GridEditorialTile>
          ))}
        </GridEditorialTiles>
      </GridEditorialInner>
    </GridEditorialSection>
  );
}

export default GridEditorial;
