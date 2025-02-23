import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Dynamically import the component with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/platform/managed-users/page')
  .catch(err => {
    console.error('Failed to load component:', err);
    return { 
      default: () => (
        <div className="error-message">
          Failed to load component. Please check the console for more details.
        </div>
      )
    };
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
      return (
        <div className="error-message">
          Something went wrong loading this component.
        </div>
      );
    }

    return this.props.children;
  }
}