import React from 'react';
import { useParentState } from '../useIframeState';
import { UsernameAvailability } from '../../components/ui/UsernameAvailability/index';

import { useForm } from 'react-hook-form';

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
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    addOnLeading: {
      type: "string",
      value: "https://cal.com/",
      label: "Add-on Leading",
    },
    isPremium: {
      type: "boolean",
      value: true,
      label: "Is Premium",
    },
  });

  const { control } = useForm({
    defaultValues: {
      username: state.inputUsernameValue.value,
    },
  });

  return (
    <UsernameAvailability
      currentUsername={state.currentUsername.value}
      setCurrentUsername={(newUsername: string) => setState('currentUsername', newUsername)}
      inputUsernameValue={state.inputUsernameValue.value}
      usernameRef={() => {}}
      setInputUsernameValue={(value: string) => setState('inputUsernameValue', value)}
      onSuccessMutation={() => console.log('Success')}
      onErrorMutation={(error) => console.error('Error', error)}
      disabled={state.disabled.value}
      addOnLeading={state.addOnLeading.value}
      isPremium={state.isPremium.value}
    />
  );
}