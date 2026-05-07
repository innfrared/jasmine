'use client';

import { forwardRef } from 'react';
import { MenuIcon } from './HeaderIcons';
import { MobileNavToggleButton } from './Header.styles';

type MobileMenuButtonProps = {
  isScrolled: boolean;
  isNavOpen: boolean;
  panelId: string;
  ariaLabelOpen: string;
  ariaLabelClose: string;
  onToggle: () => void;
};

const MobileMenuButton = forwardRef<HTMLButtonElement, MobileMenuButtonProps>(
  function MobileMenuButton(
    { isScrolled, isNavOpen, panelId, ariaLabelOpen, ariaLabelClose, onToggle },
    ref
  ) {
    return (
      <MobileNavToggleButton
        ref={ref}
        type="button"
        aria-controls={panelId}
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? ariaLabelClose : ariaLabelOpen}
        $isScrolled={isScrolled}
        onClick={onToggle}
      >
        <MenuIcon />
      </MobileNavToggleButton>
    );
  }
);

export default MobileMenuButton;
