import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/form-edit/[...appPages]';
import { useForm, FormProvider } from 'react-hook-form';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

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
        settings: {
          emailOwnerOnSubmission: false,
          customUrl: "",
          submitText: "Submit",
          redirectUrl: "",
          sendUpdatesTo: [],
          sendToAll: false
        },
        disabled: false,
        position: 1,
        fields: [],
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: 1,
        routes: [
          {
            id: "fallback",
            isFallback: true,
            action: {
              type: "customPageMessage",
              value: "Thank you for your submission"
            },
            queryValue: { id: "fallback", type: "group", children: [], properties: {} }
          }
        ],
        updatedById: 1,
        teamMembers: [],
        routers: [],
        connectedForms: []
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
          organization: { 
            slug: "org-slug",
            name: "Organization Name",
            calVideoLogo: null,
            logoUrl: null,
            brandColor: "#292929",
            darkBrandColor: "#fafafa"
          },
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
        settings: {
          emailOwnerOnSubmission: false,
          customUrl: "",
          submitText: "Submit",
          redirectUrl: "",
          sendUpdatesTo: [],
          sendToAll: false
        },
        disabled: false,
        position: 1,
        fields: [],
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: 1,
        routes: [
          {
            id: "fallback",
            isFallback: true,
            action: {
              type: "customPageMessage",
              value: "Thank you for your submission"
            },
            queryValue: { id: "fallback", type: "group", children: [], properties: {} }
          }
        ],
        updatedById: 1,
        userOrigin: "origin",
        teamOrigin: "origin",
        nonOrgUsername: null,
        nonOrgTeamslug: null,
        teamMembers: [],
        routers: [],
        connectedForms: []
      }),
      label: "Enriched With User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  const methods = useForm({
    defaultValues: JSON.parse(state.form.value),
  });

  const enrichedForm = JSON.parse(state.enrichedWithUserProfileForm.value);
  const orgBrand = enrichedForm.user.organization ? {
    id: 1,
    name: enrichedForm.user.organization.name,
    slug: enrichedForm.user.organization.slug,
    logoUrl: enrichedForm.user.organization.logoUrl,
    fullDomain: `https://${enrichedForm.user.organization.slug}.cal.com`,
    domainSuffix: "cal.com",
    role: "OWNER",
    brandColor: enrichedForm.user.organization.brandColor,
    darkBrandColor: enrichedForm.user.organization.darkBrandColor,
    theme: null,
    hideBranding: false,
  } : null;

  return (
    <OrgBrandingProvider value={{ orgBrand }}>
      <FormProvider {...methods}>
        <ImportedComponent
          trpcState={JSON.parse(state.trpcState.value)}
          form={JSON.parse(state.form.value)}
          enrichedWithUserProfileForm={JSON.parse(state.enrichedWithUserProfileForm.value)}
          appUrl={state.appUrl.value}
        />
      </FormProvider>
    </OrgBrandingProvider>
  );
}