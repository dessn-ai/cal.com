import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/reporting/[...appPages]';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
    form: {
      type: "string",
      value: JSON.stringify({}),
      label: "Form",
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: JSON.stringify({}),
      label: "Enriched User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
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