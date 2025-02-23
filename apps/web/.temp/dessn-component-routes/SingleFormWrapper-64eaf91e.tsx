import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/SingleForm';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Form",
        description: "A sample routing form",
        teamId: 1,
        routes: [],
        _count: { responses: 0 },
        team: { slug: "team-slug", name: "Team Name" },
        teamMembers: [],
        settings: { sendUpdatesTo: [], sendToAll: false },
        routers: [],
        connectedForms: []
      },
      label: "Form"
    },
    appUrl: {
      type: "string",
      value: "/routing-forms",
      label: "App URL"
    },
    enrichedWithUserProfileForm: {
      type: "object",
      value: {
        user: { email: "user@example.com", name: "John Doe" },
        team: null,
        nonOrgUsername: null,
        nonOrgTeamslug: null,
        userOrigin: null,
        teamOrigin: null
      },
      label: "Enriched User Profile Form"
    }
  });

  return (
    <ImportedComponent
      form={state.form.value}
      appUrl={state.appUrl.value}
      Page={() => <div>Page Component</div>}
      enrichedWithUserProfileForm={state.enrichedWithUserProfileForm.value}
    />
  );
}