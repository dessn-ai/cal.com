import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const MockPasswordView = () => <div>Password View Wrapper</div>;

// Mock the modules directly
const mockModules = {
  '@calcom/features/settings/appDir/SettingsHeader': MockSettingsHeader,
  '~/settings/security/password-view': MockPasswordView,
  'app/_utils': {
    _generateMetadata: () => ({
      title: 'Password Settings',
      description: 'Manage your password settings'
    }),
    getTranslate: () => (key: string) => key
  }
};

// Create a wrapped version of the imported component that includes necessary mocks
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/(settings-layout)/security/password/page')
    .catch(error => ({
      default: () => (
        <div>Error loading component: {error.message}</div>
      )
    }))
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