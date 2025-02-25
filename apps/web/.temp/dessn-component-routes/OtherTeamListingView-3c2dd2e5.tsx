import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/other-team-listing-view';

// Mock I18nProvider since we can't resolve the actual import
const MockI18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <MockI18nProvider>
      <ImportedComponent />
    </MockI18nProvider>
  );
}