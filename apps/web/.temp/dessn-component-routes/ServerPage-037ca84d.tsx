import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/sso/[provider]/page')
  .catch(() => ({ 
    default: () => <div>Error loading SSO component</div> 
  }))
);

interface Params {
  provider: string;
}

interface SearchParams {
  code: string;
  state: string;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ provider: "google" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ code: "123456", state: "abcdef" }),
      label: "Search Params",
    },
  });

  let params: Params;
  let searchParams: SearchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (e) {
    return <div>Error parsing parameters</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
}