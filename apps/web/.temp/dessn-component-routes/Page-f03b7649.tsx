import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a lazy-loaded version of the component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/calendars/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

// Define types for our mocked components
type ButtonProps = {
  children: React.ReactNode;
  [key: string]: any;
};

type SettingsHeaderProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have props, we don't need to define any state
  });

  // Mock the necessary functions and components with better typing
  const mockGetTranslate = () => (key: string) => key;
  const mockButton = ({ children, ...props }: ButtonProps) => (
    <button {...props}>{children}</button>
  );
  const mockCalendarListContainer = () => (
    <div>Calendar List Container</div>
  );
  const mockSettingsHeader = ({ children, ...props }: SettingsHeaderProps) => (
    <div {...props}>{children}</div>
  );

  // Mock the necessary imports
  React.useEffect(() => {
    // Set up mocks in useEffect to ensure they're only set in browser environment
    (window as any).getTranslate = mockGetTranslate;
    (window as any).Button = mockButton;
    (window as any).CalendarListContainer = mockCalendarListContainer;
    (window as any).SettingsHeader = mockSettingsHeader;
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <div className="preview-container">
          <ImportedComponent />
        </div>
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
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}