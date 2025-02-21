import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/security/DisableTwoFactorModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onCancel: {
      type: "string",
      value: "onCancel",
      label: "On Cancel",
    },
    onDisable: {
      type: "string",
      value: "onDisable",
      label: "On Disable",
    },
  });

  const form = useForm();

  return (
    <ImportedComponent
      onCancel={() => console.log(state.onCancel.value)}
      onDisable={() => console.log(state.onDisable.value)}
    />
  );
}