import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';
import {
  DrawerCloseButton,
  DrawerContainer,
  DrawerFooter,
  DrawerHeader,
  DrawerItemsList,
  DrawerOverlay,
  DrawerPrimaryButton,
  DrawerSummaryRow,
  DrawerTitle,
} from '@/shared/ui/drawer-panel';

export const CartModalOverlay = DrawerOverlay;
export const CartModalContainer = DrawerContainer;
export const CartModalHeader = DrawerHeader;
export const CartModalTitle = DrawerTitle;
export const CloseButton = DrawerCloseButton;
export const CartItemsList = DrawerItemsList;
export const CartFooter = DrawerFooter;
export const CartTotal = DrawerSummaryRow;
export const CheckoutButton = DrawerPrimaryButton;

export const CartSubtotalLabel = styled.span`
  ${typography.label}
  color: #8b755e;
`;
