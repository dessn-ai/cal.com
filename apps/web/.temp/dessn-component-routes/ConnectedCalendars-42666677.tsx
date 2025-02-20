import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedCalendars } from '../../components/getting-started/steps-views/ConnectCalendars';

// Create a mock wrapper instead of using TRPCProvider
const MockWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
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
    <MockWrapper>
      <ConnectedCalendars nextStep={nextStep} />
    </MockWrapper>
  );
}