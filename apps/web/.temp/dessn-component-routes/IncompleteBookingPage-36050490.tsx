import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/incomplete-booking/[...appPages]';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "form-123",
        name: "Sample Form",
        description: "A sample form for preview",
        fields: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: 1,
        teamId: null,
        disabled: false,
        position: 0,
        settings: {},
        routes: {},
        _count: { responses: 0 },
      },
      label: "Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
    enrichedWithUserProfileForm: {
      type: "object",
      value: {
        user: {
          metadata: {},
          id: 1,
          username: "johndoe",
          profile: {},
        },
        team: null,
        _count: { responses: 0 },
        name: "Enriched Form",
        description: "An enriched form for preview",
        id: "enriched-form-123",
        settings: {},
        disabled: false,
        position: 1,
        fields: [],
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: null,
        routes: {},
        updatedById: null,
      },
      label: "Enriched Form",
    },
  });

  return (
    <ImportedComponent
      form={state.form.value}
      appUrl={state.appUrl.value}
      enrichedWithUserProfileForm={state.enrichedWithUserProfileForm.value}
    />
  );
}