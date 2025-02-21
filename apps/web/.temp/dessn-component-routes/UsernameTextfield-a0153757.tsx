import React from 'react';
import { useParentState } from '../useIframeState';
import { UsernameTextfield } from '../../components/ui/UsernameAvailability/UsernameTextfield';


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
    placeholder: {
      type: "string",
      value: "Enter your username",
      label: "Placeholder",
    },
  });

  const usernameRef = React.useRef(null);

  return (
    <UsernameTextfield
      currentUsername={state.currentUsername.value}
      setCurrentUsername={(newUsername) => setState('currentUsername', newUsername)}
      inputUsernameValue={state.inputUsernameValue.value}
      setInputUsernameValue={(value) => setState('inputUsernameValue', value)}
      usernameRef={usernameRef}
      placeholder={state.placeholder.value}
      onSuccessMutation={() => console.log('Success')}
      onErrorMutation={(error) => console.error('Error:', error)}
    />
  );
}