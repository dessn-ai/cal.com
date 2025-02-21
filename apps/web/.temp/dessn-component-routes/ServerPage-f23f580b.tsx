import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components and services
const MockVerifyPage = ({ EMAIL_FROM }: { EMAIL_FROM: string }) => {
  return (
    <div>
      <h1>Verify Email Page</h1>
      <p>Email will be sent from: {EMAIL_FROM}</p>
    </div>
  );
};

// Mock the actual import to prevent errors
const ImportedComponent = () => {
  return <MockVerifyPage EMAIL_FROM={process.env.EMAIL_FROM} />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    EMAIL_FROM: {
      type: "string",
      value: "noreply@example.com",
      label: "EMAIL_FROM",
    },
  });

  // Create a mock process.env object
  const mockEnv = {
    EMAIL_FROM: state.EMAIL_FROM.value,
  };

  // Make process available globally
  (global as any).process = { env: mockEnv };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-container">
        <ImportedComponent />
      </div>
    </Suspense>
  );
}