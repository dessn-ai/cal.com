import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the WizardLayout component that we see in the stack trace
const WizardLayout = ({ children }) => (
  <div className="wizard-layout">
    <div className="wizard-container">
      <div className="wizard-content">
        {children}
      </div>
    </div>
  </div>
);

// Mock StepCard component from the stack trace
const StepCard = ({ children }) => (
  <div className="step-card">
    {children}
  </div>
);

// Mock the LayoutWrapper component
const LayoutWrapper = ({ children }) => (
  <WizardLayout>
    {children}
  </WizardLayout>
);

// Mock the main page component
const MockTeamPage = () => (
  <StepCard>
    <div>
      <h1>Create New Team</h1>
      <div>
        <p>Team creation form would go here</p>
      </div>
    </div>
  </StepCard>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LayoutWrapper>
        <MockTeamPage />
      </LayoutWrapper>
    </Suspense>
  );
}