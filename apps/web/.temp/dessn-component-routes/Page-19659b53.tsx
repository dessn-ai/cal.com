import React from 'react';
import { useParentState } from '../useIframeState';

// Create a mock component instead of importing the actual page
const MockAppPage = ({ params }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">App Preview: {params.slug}</h1>
      <p className="text-gray-600">
        This is a preview mock of the app page. The actual component uses server-side features that cannot be previewed in the browser.
      </p>
      <pre className="mt-4 p-2 bg-gray-100 rounded">
        {JSON.stringify(params, null, 2)}
      </pre>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ slug: "example-app" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return <MockAppPage {...props} />;
}