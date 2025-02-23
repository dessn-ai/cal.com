import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the import in try-catch to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/insights/layout')
  .catch(() => ({ default: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }))
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
      return <div>Something went wrong loading the layout component.</div>;
    }

    return this.props.children;
  }
}