import React from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR to avoid hydration issues
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/video/[uid]/page'),
  { ssr: false }
);

interface Params {
  uid: string;
}

interface SearchParams {
  query?: string;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example-query" }),
      label: "Search Params",
    },
  });

  let params: Params;
  let searchParams: SearchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = { uid: "example-uid" };
    searchParams = { query: "" };
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent 
        params={params} 
        searchParams={searchParams} 
      />
    </React.Suspense>
  );
}