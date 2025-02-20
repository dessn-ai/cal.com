import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/form-edit/[...appPages]';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: "{}",
      label: "TRPC State",
    },
    form: {
      type: "string",
      value: JSON.stringify({
        team: { slug: "team-slug", name: "Team Name" },
        _count: { responses: 0 },
        name: "Form Name",
        description: "Form Description",
        id: "form-id",
        settings: {},
        disabled: false,
        position: 1,
        fields: [],
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: 1,
        routes: {},
        updatedById: 1,
      }),
      label: "Form",
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: JSON.stringify({
        user: {
          metadata: {},
          id: 1,
          theme: "light",
          username: "user",
          brandColor: "#000000",
          darkBrandColor: "#FFFFFF",
          movedToProfileId: null,
          organization: { slug: "org-slug" },
          nonProfileUsername: null,
          profile: {},
        },
        team: {
          name: "Team Name",
          slug: "team-slug",
          metadata: {},
          parentId: null,
          parent: null,
        },
        _count: { responses: 0 },
        name: "Form Name",
        description: "Form Description",
        id: "form-id",
        settings: {},
        disabled: false,
        position: 1,
        fields: [],
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: 1,
        routes: {},
        updatedById: 1,
        userOrigin: "origin",
        teamOrigin: "origin",
        nonOrgUsername: null,
        nonOrgTeamslug: null,
      }),
      label: "Enriched With User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  const hookForm = useForm({
    defaultValues: JSON.parse(state.form.value),
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