import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockLegacyPage = () => <div>Mock LegacyPage</div>;
const MockSettingsHeader = ({ children, title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

// Mock utility functions
const mockUtils = {
  _generateMetadata: () => ({}),
  getTranslate: () => Promise.resolve((key) => key),
};

// Override imports with mock components
const mockModules = {
  '@calcom/features/ee/teams/pages/team-appearance-view': MockLegacyPage,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  'app/_utils': mockUtils,
};

// Wrap the import in a try-catch to handle potential import errors
let ImportedComponent;
try {
  ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/teams/other/[id]/appearance/page').catch(() => ({
    default: () => <div>Mock Imported Component</div>
  })));
} catch (error) {
  ImportedComponent = () => <div>Error loading component</div>;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Default state if needed
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}