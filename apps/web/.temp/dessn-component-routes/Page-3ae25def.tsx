import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the import in a try-catch to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/dsync/page').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => key;

  // Mock the SettingsHeader component
  const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
    <div>
      <h1>Mock Settings Header</h1>
      {children}
    </div>
  );

  // Mock the DirectorySyncTeamView component
  const MockDirectorySyncTeamView = () => <div>Mock Directory Sync Team View</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent
          getTranslate={mockGetTranslate}
          SettingsHeader={MockSettingsHeader}
          DirectorySyncTeamView={MockDirectorySyncTeamView}
        />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple ErrorBoundary component
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
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}