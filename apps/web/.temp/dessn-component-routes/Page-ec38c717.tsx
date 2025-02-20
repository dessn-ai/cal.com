import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a loading component
const Loading = () => <div>Loading...</div>;

// Create an error component
const ErrorComponent = ({ error }: { error: Error }) => (
  <div style={{ color: 'red' }}>
    Error loading component: {error.message}
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [error, setError] = React.useState<Error | null>(null);

  // Use React.lazy for dynamic import
  const DynamicComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/booking/dry-run-successful/page')
      .catch(err => {
        setError(err);
        // Return a default export to prevent breaking
        return { default: () => <ErrorComponent error={err} /> };
      })
  );

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div style={{ width: '100%', height: '100%' }}>
        <DynamicComponent />
      </div>
    </Suspense>
  );
}