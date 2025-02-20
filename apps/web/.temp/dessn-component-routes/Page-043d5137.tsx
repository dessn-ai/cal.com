import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockSAMLSSO = () => <div>SAMLSSO Component</div>;
const MockSettingsHeader = ({ children, title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

// Create a mock module object
const mockModules = {
  '@calcom/features/ee/sso/page/user-sso-view': MockSAMLSSO,
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  'app/_utils': {
    getTranslate: () => ({
      sso_configuration: 'SSO Configuration',
      sso_configuration_description: 'SSO Configuration Description'
    })
  }
};

// Override imports with mock components
const ImportedComponent = React.lazy(() => 
  Promise.resolve({
    default: () => {
      return (
        <MockSettingsHeader 
          title="SSO Configuration"
          description="SSO Configuration Description"
        >
          <MockSAMLSSO />
        </MockSettingsHeader>
      );
    }
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-container">
        <ImportedComponent />
      </div>
    </Suspense>
  );
}