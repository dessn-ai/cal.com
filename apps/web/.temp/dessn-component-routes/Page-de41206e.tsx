import React from 'react';
import { useParentState } from '../useIframeState';

// Fallback component
const FallbackComponent = ({ params, searchParams }) => {
  return (
    <div className="p-4">
      <h2>Workflow Preview</h2>
      <div>
        <h3>Parameters:</h3>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
      <div>
        <h3>Search Parameters:</h3>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;
  
  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = {};
    searchParams = {};
  }

  return (
    <div className="preview-container">
      <FallbackComponent params={params} searchParams={searchParams} />
    </div>
  );
}