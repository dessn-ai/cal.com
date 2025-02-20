import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock providers to avoid dependency issues
const MockProvider = ({ children }) => <>{children}</>;

const ComponentPreview = () => {
  const [state, setState] = useParentState({});

  // Wrap the import in a try-catch to handle potential import failures
  const ImportedComponentWrapper = React.lazy(async () => {
    try {
      // Dynamic import with error handling
      const module = await import('../../app/(use-page-wrapper)/settings/(settings-layout)/developer/webhooks/page');
      return { default: module.default };
    } catch (error) {
      console.error('Failed to load component:', error);
      return {
        default: () => (
          <div>
            <h2>Error Loading Component</h2>
            <p>Failed to load the Webhooks component. Please check the console for more details.</p>
          </div>
        ),
      };
    }
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockProvider>
        <ImportedComponentWrapper />
      </MockProvider>
    </Suspense>
  );
};

export default ComponentPreview;