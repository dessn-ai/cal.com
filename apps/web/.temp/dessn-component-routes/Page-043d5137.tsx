import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components
const MockSAMLSSO = () => <div>SAMLSSO Component</div>;
const MockSettingsHeader = ({ children, title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

// Mock translations
const mockTranslations = {
  sso_configuration: 'SSO Configuration',
  sso_configuration_description: 'SSO Configuration Description'
};

// Create a mock module for getTranslation
const mockGetTranslation = () => mockTranslations;

// Create wrapped component with mocks
const WrappedComponent = () => {
  try {
    // Mock the required modules in the component scope
    const ImportedComponent = React.lazy(() => 
      import('../../app/(use-page-wrapper)/settings/(settings-layout)/security/sso/page')
        .catch(() => ({ 
          default: () => <div>Failed to load SSO Configuration page</div> 
        }))
    );

    // Provide mocked modules through a context or direct replacement
    window.getTranslation = mockGetTranslation;
    window.SAMLSSOView = MockSAMLSSO;
    window.SettingsHeader = MockSettingsHeader;

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    );
  } catch (error) {
    console.error('Error in SSO Configuration:', error);
    return <div>Error loading SSO Configuration page</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <WrappedComponent />
    </ErrorBoundary>
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

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}