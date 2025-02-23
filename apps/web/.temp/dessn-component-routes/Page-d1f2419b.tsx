import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/developer/webhooks/new/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      // Log the error or handle it appropriately
      console.error('Error occurred in component');
    }
  }, [hasError]);

  if (hasError) {
    return <div>Something went wrong</div>;
  }

  return children;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: '20px' }}>
          <ImportedComponent />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}