import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <div className="w-full">
      <div>Preview Component</div>
      <pre>
        {JSON.stringify({ params, searchParams }, null, 2)}
      </pre>
    </div>
  );
}