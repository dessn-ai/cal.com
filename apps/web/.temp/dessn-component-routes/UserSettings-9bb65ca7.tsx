import React from 'react';
import { useParentState } from '../useIframeState';
import { UserSettings } from '../../components/getting-started/steps-views/UserSettings';
import { useForm, FormProvider } from 'react-hook-form';

// Mock TRPCProvider since we can't access the real one
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hideUsername: {
      type: "boolean",
      value: false,
      label: "Hide Username",
    },
  });

  const methods = useForm();

  return (
    <MockTRPCProvider>
      <FormProvider {...methods}>
        <UserSettings
          nextStep={() => console.log("Next step clicked")}
          hideUsername={state.hideUsername.value}
        />
      </FormProvider>
    </MockTRPCProvider>
  );
}