import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/insights/layout'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
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
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state?.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}