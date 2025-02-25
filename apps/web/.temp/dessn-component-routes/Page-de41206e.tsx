import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component to handle the case where the actual component cannot be imported
const MockWorkflowsPage = ({ params, searchParams }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Workflows Page Preview</h1>
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Parameters:</h2>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify({ params, searchParams }, null, 2)}
        </pre>
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
    params = { id: "123" };
    searchParams = { query: "test" };
  }

  return <MockWorkflowsPage params={params} searchParams={searchParams} />;
}