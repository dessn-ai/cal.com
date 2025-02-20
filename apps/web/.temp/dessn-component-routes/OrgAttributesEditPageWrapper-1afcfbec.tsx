import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR
const DynamicComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/[id]/edit/page'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Mock providers to avoid initialization issues
const MockSessionProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockI18nextProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockQueryClientProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockSessionProvider>
          <MockI18nextProvider>
            <MockTRPCProvider>
              <MockQueryClientProvider>
                <MockTooltipProvider>
                  <MockFeatureProvider>
                    <DynamicComponent />
                  </MockFeatureProvider>
                </MockTooltipProvider>
              </MockQueryClientProvider>
            </MockTRPCProvider>
          </MockI18nextProvider>
        </MockSessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}