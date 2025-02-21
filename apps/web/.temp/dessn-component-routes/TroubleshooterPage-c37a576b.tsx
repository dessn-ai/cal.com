import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/availability/troubleshoot/troubleshoot-view';

// Mock Provider to avoid build issues
const MockTroubleshooterProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <MockTroubleshooterProvider>
      <ImportedComponent />
    </MockTroubleshooterProvider>
  );
}