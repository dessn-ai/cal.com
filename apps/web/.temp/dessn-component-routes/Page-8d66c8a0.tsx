import React from 'react';
import { useParentState } from '../useIframeState';

// Mock providers and components if they're not available in the preview environment
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "1" }),
      label: "Params",
    },
  });

  let params;
  try {
    params = JSON.parse(state.params.value);
  } catch (e) {
    console.error("Failed to parse params:", e);
    params = { id: "1" };
  }

  // Wrap the dynamic import in a try-catch
  try {
    // Using require instead of import
    const ImportedComponent = require('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/[id]/edit/page').default;

    return (
      <div style={{ padding: '20px' }}>
        <MockProvider>
          <ImportedComponent params={params} />
        </MockProvider>
      </div>
    );
  } catch (error) {
    console.error('Failed to load component:', error);
    return (
      <div style={{ 
        padding: '20px', 
        color: 'red', 
        border: '1px solid red',
        borderRadius: '4px',
        margin: '10px'
      }}>
        <h3>Error Loading Component</h3>
        <p>There was an error loading the component. Details:</p>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {error instanceof Error ? error.message : 'Unknown error occurred'}
        </pre>
      </div>
    );
  }
}