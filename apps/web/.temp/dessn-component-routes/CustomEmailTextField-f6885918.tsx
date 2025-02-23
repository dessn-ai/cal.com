import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/CustomEmailTextField';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    formMethodFieldName: {
      type: "string",
      value: "email",
      label: "Form Method Field Name",
    },
    errorMessage: {
      type: "string",
      value: "",
      label: "Error Message",
    },
    emailVerified: {
      type: "boolean",
      value: false,
      label: "Email Verified",
    },
    emailPrimary: {
      type: "boolean",
      value: false,
      label: "Email Primary",
    },
    dataTestId: {
      type: "string",
      value: "custom-email-input",
      label: "Data Test ID",
    },
  });

  const formMethods = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
  });

  const handleChangePrimary = () => {
    console.log('Change Primary');
  };

  const handleVerifyEmail = () => {
    console.log('Verify Email');
  };

  const handleItemDelete = () => {
    console.log('Delete Item');
  };

  return (
    <ImportedComponent
      formMethods={formMethods}
      formMethodFieldName={state.formMethodFieldName.value as keyof { email: string }}
      errorMessage={state.errorMessage.value}
      emailVerified={state.emailVerified.value}
      emailPrimary={state.emailPrimary.value}
      dataTestId={state.dataTestId.value}
      handleChangePrimary={handleChangePrimary}
      handleVerifyEmail={handleVerifyEmail}
      handleItemDelete={handleItemDelete}
    />
  );
}