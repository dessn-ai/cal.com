import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Use dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/verify/page')
  .catch(() => ({
    default: () => <div>Error loading component</div>
  }))
);

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
    <Suspense fallback={<div>Loading...</div>}>
      <MockEnvProvider>
        <ImportedComponent />
      </MockEnvProvider>
    </Suspense>
  );
}