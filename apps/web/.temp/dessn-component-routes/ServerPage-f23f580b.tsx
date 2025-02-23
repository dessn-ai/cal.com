import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/auth/verify/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    EMAIL_FROM: {
      type: "string",
      value: "noreply@example.com",
      label: "EMAIL_FROM",
    },
  });

  // Mock the process.env
  const mockEnv = {
    EMAIL_FROM: state.EMAIL_FROM.value,
  };

  // Wrap the component with a context provider that mocks process.env
  const MockEnvProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <React.Fragment>
        {React.cloneElement(children as React.ReactElement, { process: { env: mockEnv } })}
      </React.Fragment>
    );
  };

  return (
    <MockEnvProvider>
      <ImportedComponent />
    </MockEnvProvider>
  );
}