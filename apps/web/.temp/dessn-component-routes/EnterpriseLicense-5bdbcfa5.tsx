import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/setup/EnterpriseLicense';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    licenseKey: {
      type: "string",
      value: "12345678-1234-1234-1234-123456789012",
      label: "License Key",
    },
  });

  const formMethods = useForm();

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  const handleSuccessValidate = () => {
    console.log("License key validated successfully");
  };

  return (
    <ImportedComponent
      licenseKey={state.licenseKey.value}
      onSuccessValidate={handleSuccessValidate}
      onSubmit={handleSubmit}
      initialValue={{ licenseKey: state.licenseKey.value }}
    />
  );
}