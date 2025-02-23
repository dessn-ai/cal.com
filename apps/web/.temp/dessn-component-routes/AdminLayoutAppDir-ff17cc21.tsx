import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Import the client component directly instead of the server component
const AdminLayoutAppDirClient = dynamic(() => import('../../app/(use-page-wrapper)/settings/(admin-layout)/AdminLayoutAppDirClient'), {
  ssr: false,
});

// Wrap with error boundary
const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    userRole: {
      type: "dropdown",
      value: "ADMIN",
      options: ["ADMIN", "OWNER", "MEMBER", "INACTIVE_ADMIN"],
      label: "User Role",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AdminLayoutAppDirClient
          children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
          userRole={state.userRole.value}
        />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  FallbackComponent: React.ComponentType<{ error: Error }>;
}> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent error={this.state.error!} />;
    }

    return this.props.children;
  }
}