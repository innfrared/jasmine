import type { EditorialImage } from '@/shared/types/editorial';
import {
  CardLabel,
  CardLabelText,
  CardLink,
  CardMedia,
} from './EditorialCategoryCard.styles';

export type EditorialCategoryCardProps = {
  href: string;
  title: string;
  image: EditorialImage;
  overlayVariant?: 'default' | 'lighter';
};

function EditorialCategoryCard({
  href,
  title,
  image,
  overlayVariant = 'default',
}: EditorialCategoryCardProps) {
  return (
    <CardLink href={href} $overlayVariant={overlayVariant}>
      <CardMedia
        $mobilePosition={image.focalPointMobile}
        $desktopPosition={image.focalPointDesktop}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      </CardMedia>
      <CardLabel>
        <CardLabelText>{title}</CardLabelText>
      </CardLabel>
    </CardLink>
  );
}

export default EditorialCategoryCard;
