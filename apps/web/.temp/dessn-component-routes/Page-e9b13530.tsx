import React from 'react';
import { useParentState } from '../useIframeState';

const ComponentPreview = () => {
  const [state, setState] = useParentState({});

  // Mock the basic components and functions that the page might need
  const mockComponents = {
    Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
    SettingsHeader: ({ title, description, children }: any) => (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    ),
    UsersListingView: () => <div>Users Listing View</div>,
  };

  // Apply mocks to global scope
  Object.assign(global, mockComponents);

  const ImportedComponentWithFallback = React.lazy(() => 
    import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/page')
      .catch(() => ({
        default: () => <div>Failed to load component</div>
      }))
  );

  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ImportedComponentWithFallback />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}

export default ComponentPreview;