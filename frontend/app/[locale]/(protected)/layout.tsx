import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from '../../../src/service/authServer';
import { withLocale } from '../../../src/lib/locale';
import { AuthProvider } from '../../../src/context/AuthContext';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

type ProtectedLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function ProtectedLayout({
  children,
  params,
}: ProtectedLayoutProps) {
  const { locale } = await params;
  const session = await getServerSession();
  if (!session) {
    redirect(withLocale(locale, '/login'));
  }

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
