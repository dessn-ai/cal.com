import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/DisableTwoFactorModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    disablePassword: {
      type: "boolean",
      value: false,
      label: "Disable Password",
    },
  });

  const form = useForm();

  return (
    <ImportedComponent
      open={state.open.value}
      onOpenChange={() => setState('open', !state.open.value)}
      disablePassword={state.disablePassword.value}
      onCancel={() => console.log('Cancelled')}
      onDisable={() => console.log('Disabled')}
    />
  );
}