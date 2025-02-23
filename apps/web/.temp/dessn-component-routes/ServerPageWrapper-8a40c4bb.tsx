import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from '../ErrorBoundary';

const FallbackComponent = () => (
  <div className="p-4">
    <h2>OAuth Client Edit Page</h2>
    <p>This is a preview placeholder for the OAuth Client Edit page.</p>
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Try to import the component
        const module = await import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/[clientId]/edit/page')
          .catch(() => ({ default: FallbackComponent }));
        setComponent(() => module.default);
      } catch (e) {
        console.error('Failed to load component:', e);
        setError(true);
        setComponent(() => FallbackComponent);
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return <FallbackComponent />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full">
          <div className="mx-auto">
            {Component ? <Component /> : <div>Loading...</div>}
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}