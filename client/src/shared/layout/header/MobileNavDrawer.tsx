'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import {
  MobileNavBackdrop,
  MobileNavCloseButton,
  MobileNavItem,
  MobileNavLink,
  MobileNavLinkArrow,
  MobileNavLinkLabel,
  MobileNavList,
  MobileNavPanel,
  MobileNavPanelHeader,
} from './MobileNavDrawer.styles';

function MobileNavCloseIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden={true}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MobileNavChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={true}
    >
      <path d="m10 7 5 5-5 5" />
    </svg>
  );
}

export type MobileNavDrawerItem = {
  id: string;
  label: string;
  href: string;
  isActive: boolean;
};

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MobileNavDrawerItem[];
  isScrolled: boolean;
  panelId: string;
  ariaLabelClose: string;
};

function MobileNavDrawer({
  isOpen,
  onClose,
  items,
  isScrolled,
  panelId,
  ariaLabelClose,
}: MobileNavDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !closeButtonRef.current) {
      return;
    }

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <>
      <MobileNavBackdrop
        type="button"
        aria-label={ariaLabelClose}
        onClick={onClose}
      />
      <MobileNavPanel
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Primary"
      >
        <MobileNavPanelHeader>
          <MobileNavCloseButton
            ref={closeButtonRef}
            type="button"
            aria-label={ariaLabelClose}
            onClick={onClose}
          >
            <MobileNavCloseIcon />
          </MobileNavCloseButton>
        </MobileNavPanelHeader>
        <MobileNavList>
          {items.map(item => (
            <MobileNavItem key={item.id}>
              <MobileNavLink
                href={item.href}
                $isScrolled={isScrolled}
                $isActive={item.isActive}
                scroll={false}
                onClick={() => {
                  onClose();
                }}
              >
                <MobileNavLinkLabel>{item.label}</MobileNavLinkLabel>
                <MobileNavLinkArrow aria-hidden={true}>
                  <MobileNavChevronIcon />
                </MobileNavLinkArrow>
              </MobileNavLink>
            </MobileNavItem>
          ))}
        </MobileNavList>
      </MobileNavPanel>
    </>,
    document.body
  );
}

export default MobileNavDrawer;
