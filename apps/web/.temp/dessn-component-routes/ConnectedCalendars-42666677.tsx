import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedCalendars } from '../../components/getting-started/steps-views/ConnectCalendars';

// Mock providers since we can't access the actual ones
const MockTRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const MockJotaiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const MockTooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const MockDataTableProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const MockQueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <MockQueryClientProvider>
      <MockJotaiProvider>
        <MockTooltipProvider>
          <MockDataTableProvider>
            <MockTRPCProvider>
              <ConnectedCalendars nextStep={nextStep} />
            </MockTRPCProvider>
          </MockDataTableProvider>
        </MockTooltipProvider>
      </MockJotaiProvider>
    </MockQueryClientProvider>
  );
}