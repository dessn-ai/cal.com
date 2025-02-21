import React from 'react';
import { useParentState } from '../useIframeState';
import { AdminUser } from '../../components/setup/AdminUser';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const formMethods = useForm();

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleError = () => {
    console.log('Error occurred');
  };

  const handleSuccess = () => {
    console.log('Success');
  };

  return (
    <FormProvider {...formMethods}>
      <AdminUser
        onSubmit={handleSubmit}
        onError={handleError}
        onSuccess={handleSuccess}
      />
    </FormProvider>
  );
}