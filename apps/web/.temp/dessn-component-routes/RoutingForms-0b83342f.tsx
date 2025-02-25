import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/forms/[...appPages]';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  const methods = useForm();

  const mockTrpcState = {
    queries: [],
    mutations: [],
    subscriptions: [],
    context: {},
  };

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        trpcState={mockTrpcState}
        appUrl={state.appUrl.value}
      />
    </FormProvider>
  );
}