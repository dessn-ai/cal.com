import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { IconSprites } from "@calcom/ui";

// Mock feature flags provider to avoid dependency issues
const MockFeatureProvider = ({ children }) => <>{children}</>;

const IconsPageWrapper = () => {
  try {
    // Dynamic import with error handling
    const ImportedComponent = React.lazy(() => import('../../app/icons/page').catch(() => ({
      default: () => <div>Failed to load Icons Page</div>
    })));

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    );
  } catch (error) {
    return <div>Error loading Icons Page component</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <MockFeatureProvider>
      <div className="w-full">
        <IconSprites />
        <IconsPageWrapper />
      </div>
    </MockFeatureProvider>
  );
}