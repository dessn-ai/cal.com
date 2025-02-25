import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/[id]/edit/page')
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
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "1" }),
      label: "Params",
    },
  });

  let params;
  try {
    params = JSON.parse(state.params.value);
  } catch (error) {
    console.error('Failed to parse params:', error);
    params = { id: "1" };
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent params={params} />
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
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>Please check the console for more details.</p>
        </div>
      );
    }

    return this.props.children;
  }
}