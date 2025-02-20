import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the import in a try-catch
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/insights/page')
  .catch(error => {
    console.error('Failed to load component:', error);
    return { 
      default: () => (
        <div>Error loading component: Please check the console for details</div>
      )
    };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ImportedComponent />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

// Simple ErrorBoundary component
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