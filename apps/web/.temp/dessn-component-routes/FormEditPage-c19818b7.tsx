import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/form-edit/[...appPages]';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  const mockForm = {
    fields: [],
    // Add other necessary form properties here
  };

  const mockTrpcState = {
    // Add mock trpc state here
  };

  const hookForm = useForm({
    defaultValues: mockForm,
  });

  return (
    <ImportedComponent
      trpcState={mockTrpcState}
      form={mockForm}
      enrichedWithUserProfileForm={mockForm}
      appUrl={state.appUrl.value}
      hookForm={hookForm}
    />
  );
}