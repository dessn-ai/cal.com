import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Define types for the component props
interface PageParams {
  id: string;
}

interface SearchParams {
  query?: string;
}

interface ComponentProps {
  params: PageParams;
  searchParams: SearchParams;
}

const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/organizations/[id]/add-teams/page')
  .catch((err) => {
    console.error('Error loading component:', err);
    return { default: () => <div>Error loading component</div> };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "org123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  let params: PageParams = { id: "org123" };
  let searchParams: SearchParams = {};

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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}