import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component instead of importing the actual one that uses fs
const MockCategoriesPage = ({ params, searchParams }: { 
  params: { category: string }, 
  searchParams: { query: string } 
}) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Categories Page Preview</h2>
      <p>This is a mock preview of the categories page.</p>
      <div>
        <strong>Category:</strong> {params.category}
      </div>
      <div>
        <strong>Search Query:</strong> {searchParams.query}
      </div>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff4e5', borderRadius: '4px' }}>
        <strong>Note:</strong> This is a preview environment. The actual component requires server-side file system access which is not available here.
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ category: "calendar" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const pageProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return <MockCategoriesPage {...pageProps} />;
}