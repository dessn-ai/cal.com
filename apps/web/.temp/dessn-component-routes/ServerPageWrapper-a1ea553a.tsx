import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Create a loading component
const Loading = () => (
  <div>Loading...</div>
);

// Create an error component
const ErrorComponent = ({ error }: { error: Error }) => (
  <div style={{ color: 'red' }}>
    Error loading component: {error.message}
  </div>
);

// Dynamically import the component
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/platform/members/page'),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  try {
    return (
      <Suspense fallback={<Loading />}>
        <div className="w-full">
          <ImportedComponent />
        </div>
      </Suspense>
    );
  } catch (error) {
    return <ErrorComponent error={error as Error} />;
  }
}