import { Suspense } from 'react';
import ComparisonScreen from '../../../src/presentation/screen/comparison/ComparisonScreen';
import { AuthProvider } from '../../../src/context/AuthContext';

export default function ComparisonPage() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ComparisonScreen />
      </Suspense>
    </AuthProvider>
  );
}