import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Mock Providers
const MockI18nProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockSessionProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockQueryClientProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Error Boundary Component
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

  render() {
    if (this.state.hasError) {
      return <div>Error loading component: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [DynamicComponent, setDynamicComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const component = await import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/teams/other/page');
        setDynamicComponent(() => component.default);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load component');
        console.error('Error loading component:', err);
      }
    };
    loadComponent();
  }, []);

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!DynamicComponent) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <MockFeatureProvider>
        <MockSessionProvider>
          <MockI18nProvider>
            <MockTRPCProvider>
              <MockQueryClientProvider>
                <MockTooltipProvider>
                  <Suspense fallback={<div>Loading component...</div>}>
                    <DynamicComponent 
                      getTranslate={mockGetTranslate}
                    />
                  </Suspense>
                </MockTooltipProvider>
              </MockQueryClientProvider>
            </MockTRPCProvider>
          </MockI18nProvider>
        </MockSessionProvider>
      </MockFeatureProvider>
    </ErrorBoundary>
  );
}