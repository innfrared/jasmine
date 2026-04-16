import styled from 'styled-components';
import {
  DrawerCloseButton,
  DrawerContainer,
  DrawerFooter,
  DrawerHeader,
  DrawerItemsList,
  DrawerOverlay,
  DrawerSecondaryButton,
  DrawerTitle,
} from '@/shared/ui/drawer-panel';

export const LikedModalOverlay = DrawerOverlay;
export const LikedModalContainer = DrawerContainer;
export const LikedModalHeader = DrawerHeader;
export const LikedModalTitle = DrawerTitle;
export const CloseButton = DrawerCloseButton;
export const LikedItemsList = DrawerItemsList;
export const WishlistFooter = DrawerFooter;
export const ShareWishlistButton = styled(DrawerSecondaryButton)`
  svg {
    display: block;
  }
`;
