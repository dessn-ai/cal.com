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
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="preview-container">
          <ImportedComponent
            getTranslate={mockGetTranslate}
            SettingsHeader={MockSettingsHeader}
            TwoFactorAuthView={MockTwoFactorAuthView}
          />
        </div>
      </Suspense>
    </ErrorBoundary>
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

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          Something went wrong. Please check the console for more details.
        </div>
      );
    }

    return this.props.children;
  }
}