import type { ReactNode } from 'react';
import { EditorialCtaArrow, EditorialCtaLink } from './EditorialCta.styles';

type EditorialCtaProps = {
  href: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
};

function EditorialCta({ href, children, tone = 'dark' }: EditorialCtaProps) {
  return (
    <EditorialCtaLink href={href} $tone={tone}>
      <span>{children}</span>
      <EditorialCtaArrow aria-hidden="true" />
    </EditorialCtaLink>
  );
}

export default EditorialCta;
