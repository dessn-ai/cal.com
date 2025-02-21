import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock component to handle server-side functionality
const MockVerifyEmailChange = ({ params, searchParams }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Email Verification</h1>
        <p className="mb-4">Preview Mode</p>
        <div className="text-sm text-gray-500">
          <p>Params: {JSON.stringify(params)}</p>
          <p>Search Params: {JSON.stringify(searchParams)}</p>
        </div>
      </div>
    </div>
  );
};

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

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <MockVerifyEmailChange params={params} searchParams={searchParams} />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
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
          <pre className="text-sm">{String(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}