import type { ReactNode } from 'react';
import Footer from '@/shared/layout/footer/Footer';
import LocaleSync from './LocaleSync';
import { validateLocale, type LocaleRouteParams } from './_route-utils/locale';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<LocaleRouteParams>;
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  await validateLocale(params);

  if (process.env.DEBUG_MINIMAL_LOCALE_SHELL === '1') {
    return <>{children}</>;
  }

  return (
    <div className="storefront-shell">
      <LocaleSync />
      <div className="storefront-main-layer">
        <div className="storefront-page-surface">{children}</div>
      </div>
      <div className="storefront-footer-reveal-layer">
        <div className="storefront-footer-reveal-inner">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LocaleLayout;
