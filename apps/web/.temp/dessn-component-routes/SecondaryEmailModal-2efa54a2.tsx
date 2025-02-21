import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/SecondaryEmailModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    errorMessage: {
      type: "string",
      value: "",
      label: "Error Message",
    },
  });

  const formMethods = useForm();

  const handleAddEmail = (value: { email: string }) => {
    console.log("Add email:", value.email);
  };

  const onCancel = () => {
    console.log("Cancelled");
  };

  const clearErrorMessage = () => {
    setState("errorMessage", "");
  };

  return (
    <ImportedComponent
      isLoading={state.isLoading.value}
      errorMessage={state.errorMessage.value}
      handleAddEmail={handleAddEmail}
      onCancel={onCancel}
      clearErrorMessage={clearErrorMessage}
    />
  );
}