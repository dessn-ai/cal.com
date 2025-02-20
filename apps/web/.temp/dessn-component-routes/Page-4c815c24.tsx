import React from 'react';
import { useParentState } from '../useIframeState';

// Fallback component in case the real one fails to load
const FallbackComponent = () => (
  <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
    <h2>Insights Routing Preview</h2>
    <p>This is a fallback preview component.</p>
  </div>
);

// Mock necessary browser APIs and utilities
const mockApis = {
  crypto: {
    randomBytes: (size: number) => ({
      toString: () => Array(size).fill('0').join('')
    })
  },
  fetch: async () => ({
    json: async () => ({}),
    ok: true
  })
};

// Create a safe wrapper for the component
const SafeComponent = () => {
  try {
    // Return the fallback for now since we're having import issues
    return <FallbackComponent />;
  } catch (error) {
    console.error('Error rendering component:', error);
    return <FallbackComponent />;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <SafeComponent />
    </div>
  );
}