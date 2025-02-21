import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/incomplete-booking/[...appPages]';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock context for OrgBranding
const OrgBrandingContext = React.createContext({
  brandColor: "#292929",
  darkBrandColor: "#fafafa",
  theme: null,
  hydrated: true,
});

// Create a mock context for EmbedDialog
const EmbedDialogContext = React.createContext({
  embedDialog: null,
  setEmbedDialog: () => {},
});

// Create a mock context for FormActions
const FormActionsContext = React.createContext({
  newFormDialogState: null,
  setNewFormDialogState: () => {},
});

const SchedulingType = {
  ROUND_ROBIN: "ROUND_ROBIN",
  COLLECTIVE: "COLLECTIVE",
  MANAGED: "MANAGED",
} as const;

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      responses: {},
      fields: [],
      routes: [],
      settings: {
        emailOwnerOnSubmission: false,
        sendUpdatesTo: [],
        sendToAll: false,
      },
    }
  });

  const mockResponse = {
    id: "response-1",
    formId: "form-id-1",
    response: {},
    created: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const mockEventType = {
    id: 1,
    title: "Test Event",
    slug: "test-event",
    schedulingType: SchedulingType.ROUND_ROBIN,
    length: 30,
    description: "Test event description",
    teamId: null,
  };

  const [state, setState] = useParentState({
    trpcState: {
      type: 'string',
      value: JSON.stringify({
        queries: [],
        mutations: [],
        subscriptions: [],
        form: {
          responses: [mockResponse]
        }
      }),
      label: 'TRPC State',
    },
    form: {
      type: 'string',
      value: JSON.stringify({
        id: "form-id-1",
        name: "Sample Form",
        description: "Sample form description",
        fields: [],
        settings: {
          submitText: "Submit",
          customText: "",
          redirectUrl: "",
          theme: "auto",
          disabled: false,
          duplicateFrom: null,
          emailOwnerOnSubmission: false,
          sendUpdatesTo: [],
          sendToAll: false,
        },
        responses: [],
        routes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        position: 0,
        addedToSeats: false,
        disabled: false,
        userId: "user-1",
        teamId: null,
        _count: {
          responses: 0,
          routes: 0,
        },
        teamMembers: [],
        routers: [],
        connectedForms: [],
        eventType: mockEventType,
      }),
      label: 'Form',
    },
    enrichedWithUserProfileForm: {
      type: 'string',
      value: JSON.stringify({
        id: "user-profile-form-id",
        name: "User Profile Form",
        description: "User profile form",
        fields: [],
        settings: {
          submitText: "Submit",
          customText: "",
          redirectUrl: "",
          theme: "auto",
          disabled: false,
          duplicateFrom: null,
          emailOwnerOnSubmission: false,
          sendUpdatesTo: [],
          sendToAll: false,
        },
        responses: [],
        routes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        position: 0,
        addedToSeats: false,
        disabled: false,
        userId: "user-1",
        teamId: null,
        _count: {
          responses: 0,
          routes: 0,
        },
        user: {
          id: "user-1",
          name: "Test User",
          email: "test@example.com",
        },
        team: null,
        nonOrgUsername: null,
        nonOrgTeamslug: null,
        userOrigin: null,
        teamOrigin: null,
        teamMembers: [],
        routers: [],
        connectedForms: [],
        eventType: mockEventType,
      }),
      label: 'Enriched User Profile Form',
    },
    appUrl: {
      type: 'string',
      value: 'https://example.com',
      label: 'App URL',
    },
  });

  const parseJSON = (jsonString, fallback = {}) => {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return fallback;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <OrgBrandingContext.Provider value={{
        brandColor: "#292929",
        darkBrandColor: "#fafafa",
        theme: null,
        hydrated: true,
      }}>
        <EmbedDialogContext.Provider value={{
          embedDialog: null,
          setEmbedDialog: () => {},
        }}>
          <FormActionsContext.Provider value={{
            newFormDialogState: null,
            setNewFormDialogState: () => {},
          }}>
            <FormProvider {...methods}>
              <ImportedComponent
                trpcState={parseJSON(state.trpcState.value)}
                form={parseJSON(state.form.value)}
                enrichedWithUserProfileForm={parseJSON(state.enrichedWithUserProfileForm.value)}
                appUrl={state.appUrl.value}
              />
            </FormProvider>
          </FormActionsContext.Provider>
        </EmbedDialogContext.Provider>
      </OrgBrandingContext.Provider>
    </QueryClientProvider>
  );
}

// Export the contexts so they can be used by the imported components
export {
  OrgBrandingContext,
  EmbedDialogContext,
  FormActionsContext,
};