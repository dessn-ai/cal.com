import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }) => <div>Mock Settings Header {children}</div>;
const MockLegacyPage = () => <div>Mock Legacy Page</div>;

// Create a mock module object
const mockUtils = {
  _generateMetadata: () => ({
    title: 'Mock Title',
    description: 'Mock Description'
  }),
  getTranslate: () => Promise.resolve((key) => key)
};

// Mock the actual imported component to prevent errors
const MockImportedComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <MockLegacyPage />
      </MockSettingsHeader>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: 'default-team-id',
    organizationId: 'default-org-id'
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <MockImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.error?.message || 'Something went wrong'}</div>;
    }
    return this.props.children;
  }
}