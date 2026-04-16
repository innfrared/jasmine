import styled from 'styled-components';
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
  color: #8b755e;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;
