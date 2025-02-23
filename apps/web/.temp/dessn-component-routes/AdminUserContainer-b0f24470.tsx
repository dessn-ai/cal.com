import React from 'react';
import { useParentState } from '../useIframeState';
import { AdminUserContainer } from '../../components/setup/AdminUser';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userCount: {
      type: "number",
      value: 0,
      label: "User Count",
    },
  });

  const methods = useForm();

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  const handleError = () => {
    console.log("Error occurred");
  };

  const handleSuccess = () => {
    console.log("Success");
  };

  return (
    <FormProvider {...methods}>
      <AdminUserContainer
        userCount={state.userCount.value}
        onSubmit={handleSubmit}
        onError={handleError}
        onSuccess={handleSuccess}
      />
    </FormProvider>
  );
}