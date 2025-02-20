import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Mock the server component functionality
const MockSSOComponent = ({ params, searchParams }) => {
  return (
    <div className="mx-auto max-w-md rounded-md bg-white p-8 shadow-sm">
      <h1 className="mb-4 text-xl font-semibold">SSO Authentication</h1>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Provider: {params.provider}</p>
          <p className="text-sm text-gray-600">Code: {searchParams.code}</p>
          <p className="text-sm text-gray-600">State: {searchParams.state}</p>
        </div>
        <div className="mt-4">
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              This is a preview of the SSO authentication page.
              The actual authentication flow cannot be simulated in the preview environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ provider: "google" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ code: "123456", state: "abcdef" }),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={null}>
            <I18nextProvider i18n={{} as any}>
              <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                  <FeatureProvider>
                    <div className="min-h-screen bg-gray-50 p-4">
                      <MockSSOComponent params={params} searchParams={searchParams} />
                    </div>
                  </FeatureProvider>
                </TooltipProvider>
              </QueryClientProvider>
            </I18nextProvider>
          </SessionProvider>
        </Suspense>
      </ErrorBoundary>
    );
  } catch (error) {
    return <div>Error: Failed to parse state parameters</div>;
  }
}

// Basic Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}