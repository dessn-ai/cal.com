import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/categories/layout')
  .catch(() => ({
    default: ({ children }: { children: React.ReactNode }) => (
      <div>
        <div>Layout Component</div>
        {children}
      </div>
    ),
  }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
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