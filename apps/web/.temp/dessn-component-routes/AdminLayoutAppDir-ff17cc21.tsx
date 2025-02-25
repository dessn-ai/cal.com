import React from 'react';
import { useParentState } from '../useIframeState';

// Mock Providers
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

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

  const PreviewContent = React.lazy(() => {
    return import('../../app/(use-page-wrapper)/settings/(admin-layout)/layout')
      .then(module => ({
        default: (props: any) => {
          try {
            const Component = module.default;
            return (
              <MockProvider>
                <Component {...props} />
              </MockProvider>
            );
          } catch (error) {
            console.error('Error rendering component:', error);
            return <div>Error rendering component</div>;
          }
        }
      }))
      .catch(error => ({
        default: () => {
          console.error('Error loading component:', error);
          return <div>Error loading component</div>;
        }
      }));
  });

  return (
    <div className="preview-wrapper">
      <React.Suspense fallback={<div>Loading preview...</div>}>
        <ErrorBoundary>
          <PreviewContent
            children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
            userRole={state.userRole.value as any}
          />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}

// Error Boundary Component
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
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="preview-error">
          <h3>Preview Error</h3>
          <p>Unable to render the component preview.</p>
          {this.state.error && (
            <pre>{this.state.error.message}</pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Add minimal required global mocks
if (typeof window !== 'undefined') {
  // Mock Next.js data
  window.__NEXT_DATA__ = {
    props: { pageProps: {} },
    page: '',
    query: {},
    buildId: '',
  };

  // Mock atoms
  window.__JOTAI_ATOMS__ = new Map();
  
  // Mock state
  window.__JOTAI_STATE__ = new Map();
}