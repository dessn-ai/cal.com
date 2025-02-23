import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedCalendars } from '../../components/getting-started/steps-views/ConnectCalendars';

// Mock TRPCProvider since we can't access the actual one
const MockTRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Provide a basic wrapper that just renders children
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    nextStep: {
      type: "boolean",
      value: false,
      label: "Next Step Triggered",
    },
  });

  const nextStep = () => {
    setState('nextStep', true);
    console.log("Next step triggered");
  };

  return (
    <MockTRPCProvider>
      <ConnectedCalendars nextStep={nextStep} />
    </MockTRPCProvider>
  );
}