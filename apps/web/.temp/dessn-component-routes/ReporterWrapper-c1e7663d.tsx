import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/reporting/[...appPages]';
import { FormProvider, useForm } from 'react-hook-form';

// Mock the components that require OrgBrandingProvider
jest.mock('@calcom/app-store/routing-forms/components/FormActions', () => ({
  FormAction: () => null,
  FormActionsProvider: ({ children }) => children,
}));

export default function ComponentPreview() {
  const methods = useForm();
  
  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: JSON.stringify({
        queries: [],
        mutations: [],
        subscriptions: [],
      }),
      label: "TRPC State",
    },
    form: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Test Form",
        description: "Test Description",
        fields: [],
        routes: [],
        settings: {
          emailOwnerOnSubmission: false,
          sendUpdatesTo: [],
          sendToAll: false,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        disabled: false,
        responses: [],
        teamId: null,
        userId: 1,
        _count: {
          responses: 0,
          routes: 0,
        },
        routers: [],
        connectedForms: [],
        teamMembers: [],
      }),
      label: "Form",
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Test Form",
        description: "Test Description",
        fields: [],
        routes: [],
        settings: {
          emailOwnerOnSubmission: false,
          sendUpdatesTo: [],
          sendToAll: false,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        disabled: false,
        responses: [],
        teamId: null,
        userId: 1,
        _count: {
          responses: 0,
          routes: 0,
        },
        user: {
          id: 1,
          name: "Test User",
          email: "test@example.com",
        },
        team: null,
        routers: [],
        connectedForms: [],
        teamMembers: [],
        nonOrgUsername: null,
        nonOrgTeamslug: null,
        userOrigin: null,
        teamOrigin: null,
      }),
      label: "Enriched User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  // Create a simplified version of the component that doesn't use OrgBranding
  const SimplifiedComponent = () => {
    try {
      return (
        <FormProvider {...methods}>
          <ImportedComponent
            trpcState={JSON.parse(state.trpcState.value)}
            form={JSON.parse(state.form.value)}
            enrichedWithUserProfileForm={JSON.parse(state.enrichedWithUserProfileForm.value)}
            appUrl={state.appUrl.value}
          />
        </FormProvider>
      );
    } catch (error) {
      console.error('Error rendering component:', error);
      return <div>Error rendering form component</div>;
    }
  };

  return <SimplifiedComponent />;
}