import React, { Suspense, ErrorBoundary } from 'react';
import { useParentState } from '../useIframeState';
// Remove the direct import and mock it instead
// import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/flags/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Create instances
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
  fallbackLng: 'en',
});

// Mock TRPC Provider
const TRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock Feature Provider
const FeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock Session Provider
const SessionProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock the imported component
const MockImportedComponent = () => {
  return (
    <div>
      <h1>Flags Settings Page</h1>
      <div>Mocked Flags Management Interface</div>
    </div>
  );
};

// Custom error boundary component
class CustomErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the necessary functions and components
  const mockGetTranslate = async () => (key: string) => key;
  const mockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  const mockFlagListingView = () => <div>Flag Listing View</div>;

  // Mock the imports
  (global as any).getTranslate = mockGetTranslate;
  (global as any).SettingsHeader = mockSettingsHeader;
  (global as any).FlagListingView = mockFlagListingView;

  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider>
          <I18nextProvider i18n={i18n}>
            <TRPCProvider>
              <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                  <FeatureProvider>
                    <MockImportedComponent />
                  </FeatureProvider>
                </TooltipProvider>
              </QueryClientProvider>
            </TRPCProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </CustomErrorBoundary>
  );
}