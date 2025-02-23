import React from 'react';
import { useParentState } from '../useIframeState';

const Error403Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h1 className="font-cal mb-4 text-3xl text-gray-900">403 - Forbidden</h1>
        <p className="mb-6 text-gray-600">
          You do not have permission to access this page. Please contact your administrator if you think this is a mistake.
        </p>
        <button
          onClick={() => window.history.back()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <div className="min-h-screen bg-gray-50">
      <ErrorBoundary>
        <React.Suspense fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="text-gray-600">Loading...</div>
          </div>
        }>
          <Error403Page />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl text-red-600">Something went wrong</h2>
            <p className="mb-4 text-gray-600">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}