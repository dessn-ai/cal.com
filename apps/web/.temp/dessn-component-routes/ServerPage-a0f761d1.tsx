import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/d/[link]/[slug]/page')
  .catch(() => ({ default: () => <div>Failed to load component</div> }))
);

export default function ComponentPreview() {
  try {
    const [state, setState] = useParentState({
      params: {
        type: "string",
        value: JSON.stringify({ link: "example-link", slug: "example-slug" }),
        label: "Params",
      },
      searchParams: {
        type: "string",
        value: JSON.stringify({ query: "example-query" }),
        label: "Search Params",
      },
    });

    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent params={params} searchParams={searchParams} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <div>Error loading component</div>;
  }
}