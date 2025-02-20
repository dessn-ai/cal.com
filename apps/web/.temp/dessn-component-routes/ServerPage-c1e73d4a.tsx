import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component instead of importing
const MockUserPage = ({ params, searchParams }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Page Preview</h1>
      <div>
        <h2>Parameters:</h2>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
      <div>
        <h2>Search Parameters:</h2>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ user: "johndoe" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Failed to parse params:', error);
    params = { user: "johndoe" };
    searchParams = { date: "2023-06-01" };
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <MockUserPage params={params} searchParams={searchParams} />
    </div>
  );
}