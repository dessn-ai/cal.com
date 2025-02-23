import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Lazy load the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/layout').catch(() => ({
  default: () => <div>Failed to load settings layout component</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    containerClassName: {
      type: "string",
      value: "container-class",
      label: "Container Class Name",
    },
  });

  return (
    <Suspense fallback={<div>Loading settings layout...</div>}>
      <ErrorBoundary>
        <ImportedComponent
          children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
          containerClassName={state.containerClassName.value}
        />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
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
      return <div>Something went wrong loading the settings layout.</div>;
    }

    return this.props.children;
  }
}