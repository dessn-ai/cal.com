import React from 'react';
import { useParentState } from '../useIframeState';
import { PremiumTextfield } from '../../components/ui/UsernameAvailability/PremiumTextfield';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentUsername: {
      type: "string",
      value: "johndoe",
      label: "Current Username",
    },
    inputUsernameValue: {
      type: "string",
      value: "johndoe",
      label: "Input Username Value",
    },
    readonly: {
      type: "boolean",
      value: false,
      label: "Readonly",
    },
  });

  return (
    <PremiumTextfield
      currentUsername={state.currentUsername.value}
      setCurrentUsername={(newUsername) => setState('currentUsername', newUsername)}
      inputUsernameValue={state.inputUsernameValue.value}
      setInputUsernameValue={(value) => setState('inputUsernameValue', value)}
      usernameRef={() => {}}
      onSuccessMutation={() => console.log('Success')}
      onErrorMutation={(error) => console.error('Error', error)}
      readonly={state.readonly.value}
    />
  );
}