import React from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to avoid hydration issues
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/organizations/[id]/add-teams/page'),
  { ssr: false }
);

interface Params {
  id: string;
}

interface SearchParams {
  query?: string;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "org123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value) as Params;
    const searchParams = JSON.parse(state.searchParams.value) as SearchParams;

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent 
          params={params} 
          searchParams={searchParams}
        />
      </React.Suspense>
    );
  } catch (error) {
    console.error('Error parsing params:', error);
    return <div>Error: Failed to load component</div>;
  }
}