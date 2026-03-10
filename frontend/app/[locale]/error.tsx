'use client';

import React, { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h1>Something went wrong</h1>
      <p>We hit an unexpected error. Please try again.</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
