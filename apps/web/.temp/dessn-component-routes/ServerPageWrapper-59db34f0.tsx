import React, { Suspense, lazy } from 'react';
import { useParentState } from '../useIframeState';

// Mock necessary context/providers that the component might need
const mockFeatureFlags = {
  flags: {},
  setFlag: () => {},
};

const mockSession = {
  data: null,
  status: "unauthenticated"
};

// Create context providers
const FeatureFlagsContext = React.createContext(mockFeatureFlags);
const SessionContext = React.createContext(mockSession);

// Wrap the dynamic import in a try-catch
const DynamicComponent = lazy(() => 
  import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/create/page')
    .catch(err => {
      console.error('Failed to load component:', err);
      return { 
        default: () => (
          <div className="p-4 text-red-500">
            Failed to load component. Please check the console for details.
          </div>
        )
      };
    })
);

export default function ComponentPreview() {
  return (
    <ErrorBoundary>
      <FeatureFlagsContext.Provider value={mockFeatureFlags}>
        <SessionContext.Provider value={mockSession}>
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <div className="p-4">
              <DynamicComponent />
            </div>
          </Suspense>
        </SessionContext.Provider>
      </FeatureFlagsContext.Provider>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error in component:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          <h2>Something went wrong.</h2>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error?.toString()}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}