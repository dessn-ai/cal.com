import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/auth/verify-email/page').catch(() => {
    return () => <div>Failed to load component</div>;
  }),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ImportedComponent />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          Something went wrong rendering this component.
        </div>
      );
    }

    try {
      return this.props.children;
    } catch (error) {
      console.error('Render error:', error);
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          Failed to render component.
        </div>
      );
    }
  }
}