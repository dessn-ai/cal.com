import React from 'react';
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

// Create a mock wrapper for the imported component
const MockImportedComponent = () => {
  try {
    return (
      <MockSettingsHeader
        title={mockTranslations.sso_configuration}
        description={mockTranslations.sso_configuration_description}>
        <MockSAMLSSO />
      </MockSettingsHeader>
    );
  } catch (error) {
    console.error('Error rendering component:', error);
    return <div>Error loading component</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div>
      <MockImportedComponent />
    </div>
  );
}