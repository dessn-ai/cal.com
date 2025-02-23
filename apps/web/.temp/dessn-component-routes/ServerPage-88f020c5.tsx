import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component to handle server-side functionality
const MockSSODirectView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold">SSO Direct View</h1>
      <p className="mt-4">This is a mock of the SSO Direct page for preview purposes</p>
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

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return <MockSSODirectView />;
}