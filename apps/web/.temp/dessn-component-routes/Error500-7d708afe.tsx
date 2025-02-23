import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/500/page').catch(() => ({
  default: () => <div>Error loading component</div>
})));

interface StateType {
  error: {
    type: string;
    value: string;
    label: string;
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState<StateType>({
    error: {
      type: "string",
      value: "Example error message",
      label: "Error Message",
    },
  });

  const searchParams = {
    error: state?.error?.value ?? "Default error message",
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent searchParams={searchParams} />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
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
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}