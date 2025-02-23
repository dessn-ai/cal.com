'use client';

import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Using Next.js dynamic import with no SSR
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/auth/forgot-password/[id]/page').catch(() => {
    // Fallback component if import fails
    return () => (
      <div className="p-4 text-red-500">
        Error: Unable to load the forgot password component
      </div>
    );
  }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "abc123" }),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <div className="preview-container">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading component...</div>}>
            <ImportedComponent params={params} searchParams={searchParams} />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 text-red-500">
        Error: Failed to parse parameters
      </div>
    );
  }
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

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          Something went wrong loading the component.
        </div>
      );
    }

    return this.props.children;
  }
}