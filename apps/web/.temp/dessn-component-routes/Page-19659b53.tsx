import React from 'react';
import { useParentState } from '../useIframeState';

// Mock data that would normally come from the file system
const MOCK_APP_DATA = {
  name: "Example App",
  description: "This is an example app description",
  categories: ["productivity"],
  price: "0",
  isDefault: false,
  body: "# Example App\nThis is a mock content for preview.",
};

// Mock Component instead of importing the actual one
const MockAppComponent = ({ params, searchParams }) => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="mb-8">
        <h1 className="mb-1 text-3xl font-bold">{MOCK_APP_DATA.name}</h1>
        <p className="text-neutral-500">{MOCK_APP_DATA.description}</p>
      </div>
      
      <div className="prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: MOCK_APP_DATA.body }} />
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold">App Details</h2>
        <div className="mt-2">
          <p><strong>Categories:</strong> {MOCK_APP_DATA.categories.join(', ')}</p>
          <p><strong>Price:</strong> ${MOCK_APP_DATA.price}</p>
          <p><strong>Default:</strong> {MOCK_APP_DATA.isDefault ? 'Yes' : 'No'}</p>
        </div>
      </div>
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

  return <MockAppComponent {...props} />;
}