import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from './providers';
import '../style.css';

export const metadata: Metadata = {
  title: 'Jasmine Crafted',
  description: 'Jasmine Crafted storefront',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  const minimalProviders = process.env.DEBUG_MINIMAL_PROVIDERS === '1';

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {minimalProviders ? children : <Providers>{children}</Providers>}
      </body>
    </html>
  );
};

export default RootLayout;
