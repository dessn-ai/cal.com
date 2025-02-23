import React from 'react';
import { useParentState } from '../useIframeState';
import { UsernameAvailabilityField } from '../../components/ui/UsernameAvailability/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onSuccessMutation: {
      type: "boolean",
      value: false,
      label: "Trigger Success Mutation",
    },
    onErrorMutation: {
      type: "boolean",
      value: false,
      label: "Trigger Error Mutation",
    },
  });

  const onSuccessMutation = state.onSuccessMutation.value ? () => console.log("Success mutation triggered") : undefined;
  const onErrorMutation = state.onErrorMutation.value ? (error) => console.error("Error mutation triggered", error) : undefined;

  return (
    <UsernameAvailabilityField
      onSuccessMutation={onSuccessMutation}
      onErrorMutation={onErrorMutation}
    />
  );
}