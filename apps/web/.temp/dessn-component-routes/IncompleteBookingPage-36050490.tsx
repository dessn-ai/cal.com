import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/incomplete-booking/[...appPages]';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: 'string',
      value: '{}',
      label: 'TRPC State',
    },
    form: {
      type: 'string',
      value: '{"id": "form-id-1", "name": "Sample Form"}',
      label: 'Form',
    },
    enrichedWithUserProfileForm: {
      type: 'string',
      value: '{"id": "user-profile-form-id", "name": "User Profile Form"}',
      label: 'Enriched User Profile Form',
    },
    appUrl: {
      type: 'string',
      value: 'https://example.com',
      label: 'App URL',
    },
  });

  return (
    <ImportedComponent
      trpcState={JSON.parse(state.trpcState.value)}
      form={JSON.parse(state.form.value)}
      enrichedWithUserProfileForm={JSON.parse(state.enrichedWithUserProfileForm.value)}
      appUrl={state.appUrl.value}
    />
  );
}