import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

// Dynamically import the component with no SSR
const DynamicComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/apps/[slug]/setup/page').catch(() => {
    // Return a fallback component if import fails
    return () => <div>Failed to load component</div>;
  }),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ slug: "example-app" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent params={params} searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  );
}