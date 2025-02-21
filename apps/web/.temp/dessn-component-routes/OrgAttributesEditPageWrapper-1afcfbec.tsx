import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Mock providers with minimal implementation
const MockSessionProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockI18nextProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockQueryClientProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockOrgBrandingProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [Component, setComponent] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/[id]/edit/page');
        setComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err instanceof Error ? err : new Error('Failed to load component'));
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return <div>Error loading component: {error.message}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <MockSessionProvider>
      <MockI18nextProvider>
        <MockTRPCProvider>
          <MockQueryClientProvider>
            <MockTooltipProvider>
              <MockFeatureProvider>
                <MockOrgBrandingProvider>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                </MockOrgBrandingProvider>
              </MockFeatureProvider>
            </MockTooltipProvider>
          </MockQueryClientProvider>
        </MockTRPCProvider>
      </MockI18nextProvider>
    </MockSessionProvider>
  );
}