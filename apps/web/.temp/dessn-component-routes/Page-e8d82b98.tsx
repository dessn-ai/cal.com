import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockComponent = () => {
  return (
    <div className="mock-team-profile">
      <h1>Team Profile Page</h1>
      <div>This is a mock of the team profile page</div>
    </div>
  );
};

// Create a simple error boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong rendering this component</h2>
          <pre>{String(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MockComponent />
      </React.Suspense>
    </ErrorBoundary>
  );
}

// Mock any required modules
const mockModules = {
  '@calcom/features/ee/teams/pages/team-profile-view': MockComponent,
  '@calcom/features/settings/appDir/SettingsHeader': ({ children }) => (
    <div>{children}</div>
  ),
  'app/_utils': {
    _generateMetadata: () => ({
      title: 'Mock Title',
      description: 'Mock Description'
    }),
    getTranslate: () => (key) => key,
  }
};

// Apply mocks
Object.entries(mockModules).forEach(([path, mock]) => {
  try {
    jest.mock(path, () => mock);
  } catch (e) {
    console.warn(`Failed to mock ${path}`, e);
  }
});