import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/members/page')
  .catch((error) => {
    console.error('Error loading component:', error);
    return { 
      default: () => <div>Error loading component. Please check the console for details.</div> 
    };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <ImportedComponent />
          </ErrorBoundary>
        </Suspense>
      </QueryClientProvider>
    </SessionProvider>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please check the console for details.</div>;
    }

    return this.props.children;
  }
}