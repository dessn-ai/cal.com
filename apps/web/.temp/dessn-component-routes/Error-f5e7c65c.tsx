import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the error component with no SSR to avoid Buffer conflicts
const ImportedComponent = dynamic(() => import('../../app/error'), {
  ssr: false,
});

// Custom error boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

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
  const [state] = useParentState({
    errorMessage: {
      type: "string",
      value: "An unexpected error occurred",
      label: "Error Message",
    },
    errorName: {
      type: "string",
      value: "Internal Server Error",
      label: "Error Name",
    },
    statusCode: {
      type: "number",
      value: 500,
      label: "Status Code",
    },
  });

  const errorProps = {
    message: state.errorMessage.value,
    name: state.errorName.value,
    statusCode: state.statusCode.value,
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent error={errorProps} />
      </Suspense>
    </ErrorBoundary>
  );
}