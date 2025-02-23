import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import to handle the module loading
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/security/two-factor-auth/page'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => key;

  // Mock the SettingsHeader component
  const MockSettingsHeader = ({ children, title, description }: any) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );

  // Mock the TwoFactorAuthView component
  const MockTwoFactorAuthView = () => <div>Two Factor Auth View</div>;

  return (
    <div className="preview-container">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{ padding: '20px' }}>
            {/* Wrap the component in a try-catch block */}
            {(() => {
              try {
                return (
                  <ImportedComponent
                    getTranslate={mockGetTranslate}
                    SettingsHeader={MockSettingsHeader}
                    TwoFactorAuthView={MockTwoFactorAuthView}
                  />
                );
              } catch (error) {
                console.error('Error rendering component:', error);
                return <div>Error loading component. Please check the console for details.</div>;
              }
            })()}
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

// Add ErrorBoundary component
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

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <p>Please check the console for more details.</p>
        </div>
      );
    }

    return this.props.children;
  }
}