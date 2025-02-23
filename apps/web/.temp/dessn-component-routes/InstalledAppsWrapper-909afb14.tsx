import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { AppCategories } from "@calcom/prisma/enums";

// Wrap the dynamic import in a try-catch
const ImportedComponentWrapper = () => {
  const [error, setError] = React.useState(null);
  const [Component, setComponent] = React.useState(null);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/apps/installed/[category]/page');
        setComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err);
      }
    };
    loadComponent();
  }, []);

  if (error) {
    return <div>Error loading component: {error.message}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    category: {
      type: "dropdown",
      value: "calendar",
      options: Object.values(AppCategories),
      label: "Category",
    },
  });

  const mockParams = {
    category: state.category.value,
  };

  const mockSearchParams = {};

  // Create a basic error boundary
  const ErrorFallback = ({ error }) => (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
    </div>
  );

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    render() {
      if (this.state.hasError) {
        return <ErrorFallback error={this.state.error} />;
      }
      return this.props.children;
    }
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="p-4">
          <ImportedComponentWrapper />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}