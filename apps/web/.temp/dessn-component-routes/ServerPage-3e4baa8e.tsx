import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR
const DynamicComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/apps/routing-forms/[...pages]/page'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Simple error boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading component. Please try again.</div>;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ pages: ["routing-link", "form1"] }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;
  
  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = { pages: ["routing-link", "form1"] };
    searchParams = { query: "example" };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent params={params} searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  );
}