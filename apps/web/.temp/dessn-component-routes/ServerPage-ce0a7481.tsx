import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Error Boundary Component
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
      return (
        <div className="p-4 text-red-500">
          <h2>Something went wrong.</h2>
          <pre className="mt-2 text-sm">
            {this.state.error?.message || 'Unknown error'}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const ImportedComponent = (await import('../../app/(use-page-wrapper)/auth/forgot-password/page')).default;
        setComponent(() => ImportedComponent);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err);
      }
    };

    loadComponent();
  }, []);

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  if (error) {
    return (
      <div className="p-4 text-red-500">
        <h2>Error loading component</h2>
        <pre className="mt-2 text-sm">{error.message}</pre>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <div className="min-h-screen bg-white p-4">
          {Component ? <Component {...props} /> : <div>Loading component...</div>}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}