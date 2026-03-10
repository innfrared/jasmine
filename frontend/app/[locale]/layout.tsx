import { AuthProvider } from '../../src/context/AuthContext';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}