import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Define proper types
type PageParams = {
  workflow: string;
};

type Props = {
  params: PageParams;
  searchParams: Record<string, string>;
};

// Use dynamic import with proper error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/workflows/[workflow]/page')
  .catch((err) => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ workflow: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value) as PageParams;
  const searchParams = JSON.parse(state.searchParams.value) as Record<string, string>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
}