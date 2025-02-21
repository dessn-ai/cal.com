import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock providers with minimal implementation
const MockSessionProvider = ({ children }) => <>{children}</>;
const MockI18nextProvider = ({ children }) => <>{children}</>;
const MockQueryClientProvider = ({ children }) => <>{children}</>;
const MockTooltipProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockOrgBrandingProvider = ({ children }) => <>{children}</>;

const ErrorBoundary = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return <div>Error loading component: {error.message}</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/privacy/page')
      .catch(err => ({
        default: () => <div>Error loading component: {err.message}</div>
      }))
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockSessionProvider>
          <MockI18nextProvider>
            <MockQueryClientProvider>
              <MockTooltipProvider>
                <MockFeatureProvider>
                  <MockOrgBrandingProvider>
                    <ImportedComponent />
                  </MockOrgBrandingProvider>
                </MockFeatureProvider>
              </MockTooltipProvider>
            </MockQueryClientProvider>
          </MockI18nextProvider>
        </MockSessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}