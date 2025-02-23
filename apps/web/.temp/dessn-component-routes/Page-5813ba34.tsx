import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="settings-header">{children}</div>
);

const MockCreateNewOutOfOfficeEntryButton = () => (
  <button data-testid="add_entry_ooo">Add Entry</button>
);

const MockOutOfOfficeEntriesList = () => (
  <div data-testid="out-of-office-entries-list">Entries List</div>
);

// Mock the modules directly
const mockTranslate = (key: string) => key;

// Override imports with mock components
import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/out-of-office/page').then((module) => {
  // Override the dependencies used by the imported component
  (window as any)['@calcom/features/settings/appDir/SettingsHeader'] = MockSettingsHeader;
  (window as any)['@calcom/features/settings/outOfOffice/CreateNewOutOfOfficeEntryButton'] = MockCreateNewOutOfOfficeEntryButton;
  (window as any)['@calcom/features/settings/outOfOffice/OutOfOfficeEntriesList'] = {
    OutOfOfficeEntriesList: MockOutOfOfficeEntriesList
  };
  (window as any)['app/_utils'] = {
    _generateMetadata: () => ({}),
    getTranslate: () => mockTranslate,
  };
});

// Lazy load the component
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/out-of-office/page')
    .catch(error => {
      console.error('Failed to load component:', error);
      return { default: () => <div>Failed to load component</div> };
    })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <div style={{ padding: '20px' }}>
          <MockSettingsHeader>
            <h1>Out of Office</h1>
          </MockSettingsHeader>
          <MockCreateNewOutOfOfficeEntryButton />
          <MockOutOfOfficeEntriesList />
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}

// Error Boundary Component
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
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}