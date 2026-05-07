'use client';

import { ReactSVG } from 'react-svg';
import { applyCurrentColorToLogo } from './Header.helpers';
import type { HeaderPhase } from './Header.hooks';
import { AnimatedLogo, HeaderLogo } from './Header.styles';

type HeaderLogoButtonProps = {
  phase: HeaderPhase;
  onClick: () => void;
};

export default function HeaderLogoButton({
  phase,
  onClick,
}: HeaderLogoButtonProps) {
  return (
    <HeaderLogo onClick={onClick} aria-label="Jasmine Crafted">
      <AnimatedLogo $phase={phase}>
        <ReactSVG
          src="/assets/logobig.svg"
          beforeInjection={applyCurrentColorToLogo}
        />
      </AnimatedLogo>
    </HeaderLogo>
  );
}
