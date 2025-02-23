import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/incomplete-booking/[...appPages]';
import { FormProvider, useForm } from 'react-hook-form';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const methods = useForm();
  const [state, setState] = useParentState({
    trpcState: {
      type: 'string',
      value: '{}',
      label: 'TRPC State',
    },
    form: {
      type: 'string',
      value: JSON.stringify({
        id: "form-id-1",
        name: "Sample Form",
        description: "A sample routing form",
        routes: [
          {
            id: "route-1",
            name: "Default Route",
            isFallback: true,
            action: {
              type: "customPageMessage",
              value: "Thank you for your submission"
            }
          }
        ],
        fields: [],
        settings: {
          emailOwnerOnSubmission: true
        },
        teamId: null,
        userId: "user-1",
        disabled: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: {
          responses: 0
        },
        routers: [],
        connectedForms: [],
        teamMembers: []
      }),
      label: 'Form',
    },
    enrichedWithUserProfileForm: {
      type: 'string',
      value: JSON.stringify({
        id: "user-profile-form-id",
        name: "User Profile Form",
        description: "User profile form",
        user: {
          id: "user-1",
          name: "Test User",
          email: "test@example.com"
        },
        team: null,
        routes: [],
        fields: [],
        settings: {},
        nonOrgUsername: null,
        nonOrgTeamslug: null,
        userOrigin: null,
        teamOrigin: null
      }),
      label: 'Enriched User Profile Form',
    },
    appUrl: {
      type: 'string',
      value: 'https://example.com',
      label: 'App URL',
    },
  });

  // Mock organization branding data
  const orgBrandingValue = {
    orgBrand: {
      id: 1,
      name: "Test Organization",
      slug: "test-org",
      logoUrl: null,
      fullDomain: "test-org.cal.com",
      domainSuffix: "cal.com",
      role: "MEMBER",
      theme: null,
      brandColor: "#292929",
      darkBrandColor: "#fafafa",
      metadata: {}
    }
  };

  return (
    <OrgBrandingProvider value={orgBrandingValue}>
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