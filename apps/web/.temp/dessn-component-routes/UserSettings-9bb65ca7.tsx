import React from 'react';
import { useParentState } from '../useIframeState';
import { UserSettings } from '../../components/getting-started/steps-views/UserSettings';

import { useForm } from 'react-hook-form';

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
    <UserSettings
      nextStep={() => console.log("Next step clicked")}
      hideUsername={state.hideUsername.value}
    />
  );
}