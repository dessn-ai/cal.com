import React, { Suspense, useState } from 'react';
import { useParentState } from '../useIframeState';

// Mock providers to avoid dependency issues
const MockOrgBrandingProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockTooltipProvider = ({ children }) => <>{children}</>;

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

// Lazy load the imported component
const LazyImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/create/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockTooltipProvider>
          <MockFeatureProvider>
            <MockOrgBrandingProvider>
              <LazyImportedComponent />
            </MockOrgBrandingProvider>
          </MockFeatureProvider>
        </MockTooltipProvider>
      </Suspense>
    </ErrorBoundary>
  );
}