import React, { Suspense, useState, useEffect } from 'react';
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { FeatureProvider } from "@calcom/features/flags/context/provider";
import { useParentState } from '../useIframeState';
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { mockedTrpc } from '../Wrapper';

const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => Promise.resolve(true),
  back: () => Promise.resolve(true),
  forward: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
};

const ErrorFallback = ({ error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

// Mock TRPC client
const mockTrpcClient = {
  query: () => Promise.resolve(null),
  mutation: () => Promise.resolve(null),
  subscription: () => Promise.resolve(null),
  request: () => Promise.resolve(null),
};

export default function ComponentPreview() {
  const [DynamicComponent, setDynamicComponent] = useState(null);
  const [error, setError] = useState(null);

  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "org123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/settings/organizations/[id]/add-teams/page');
        setDynamicComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err);
      }
    };
    loadComponent();
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
      }
    }
  });

  if (error) {
    return <ErrorFallback error={error} />;
  }

  if (!DynamicComponent) {
    return <div>Loading component...</div>;
  }

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider>
          <I18nextProvider i18n={i18n}>
            <AppRouterContext.Provider value={mockRouter}>
              <mockedTrpc.Provider client={mockTrpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                  <TooltipProvider>
                    <FeatureProvider value={{}}>
                      <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <DynamicComponent params={params} searchParams={searchParams} />
                      </ErrorBoundary>
                    </FeatureProvider>
                  </TooltipProvider>
                </QueryClientProvider>
              </mockedTrpc.Provider>
            </AppRouterContext.Provider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    );
  } catch (err) {
    return <ErrorFallback error={err} />;
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.FallbackComponent({ error: this.state.error });
    }

    return this.props.children;
  }
}