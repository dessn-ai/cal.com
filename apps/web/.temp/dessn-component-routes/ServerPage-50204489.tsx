import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import with error handling
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/auth/error/page').catch(() => {
    // Fallback component in case of import error
    return () => <div>Error loading component</div>;
  }),
  {
    suspense: true,
  }
);

export default function ComponentPreview() {
  try {
    const [state, setState] = useParentState({
      params: {
        type: "string",
        value: JSON.stringify({}),
        label: "Params",
      },
      searchParams: {
        type: "string",
        value: JSON.stringify({ error: "sample_error" }),
        label: "Search Params",
      },
    });

    const props = {
      params: JSON.parse(state.params.value),
      searchParams: JSON.parse(state.searchParams.value),
    };

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent {...props} />
      </Suspense>
    );
  } catch (error) {
    return <div>Error: Failed to render component</div>;
  }
}