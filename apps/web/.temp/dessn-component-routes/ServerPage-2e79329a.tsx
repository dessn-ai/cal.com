import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to avoid server-side issues
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/platform/new/page').catch(() => {
    return () => <div>Failed to load component</div>;
  }),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Mock providers to reduce external dependencies
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

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

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockProvider>
          <MockProvider>
            <MockProvider>
              <MockTRPCProvider>
                <MockProvider>
                  <MockFeatureProvider>
                    <div style={{ padding: '20px' }}>
                      <ImportedComponent {...props} />
                    </div>
                  </MockFeatureProvider>
                </MockProvider>
              </MockTRPCProvider>
            </MockProvider>
          </MockProvider>
        </MockProvider>
      </Suspense>
    </ErrorBoundary>
  );
}