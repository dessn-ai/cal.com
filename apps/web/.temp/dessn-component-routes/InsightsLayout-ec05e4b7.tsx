import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Import the component dynamically with error handling
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/insights/layout').catch(() => {
    // Return a fallback component if import fails
    return () => <div>Error loading Insights Layout</div>;
  }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent>
          <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
        </ImportedComponent>
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in Insights Layout:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the Insights Layout.</div>;
    }

    return this.props.children;
  }
}