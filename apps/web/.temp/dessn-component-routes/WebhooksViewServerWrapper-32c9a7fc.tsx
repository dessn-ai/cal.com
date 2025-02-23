import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Separate the dynamic import into its own component
const DynamicComponent = () => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/settings/(settings-layout)/developer/webhooks/page');
        setComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err instanceof Error ? err : new Error('Failed to load component'));
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return (
      <div>
        <h2>Error loading component</h2>
        <pre>{error.message}</pre>
      </div>
    );
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}