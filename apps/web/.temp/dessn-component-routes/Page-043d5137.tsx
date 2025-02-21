import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/security/sso/page';


// Mock the necessary dependencies
jest.mock('app/_utils', () => ({
  getTranslate: jest.fn(() => ({
    sso_configuration: 'SSO Configuration',
    sso_configuration_description: 'SSO Configuration Description'
  }))
}));

jest.mock('@calcom/features/ee/sso/page/user-sso-view', () => () => <div>SAMLSSO Component</div>);
jest.mock('@calcom/features/settings/appDir/SettingsHeader', () => 
  ({ children, title, description }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}