import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the import in a try-catch to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/managed-users/page')
  .catch((err) => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent />
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
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}