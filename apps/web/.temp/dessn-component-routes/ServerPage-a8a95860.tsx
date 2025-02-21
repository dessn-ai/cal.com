import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/organizations/new/page')
  .catch(err => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Failed to load component</div> };
  })
);

export default function ComponentPreview() {
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

  let params = {};
  let searchParams = {};

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent params={params} searchParams={searchParams} />
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
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}