import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/form-edit/[...appPages]';
import { useForm, FormProvider } from 'react-hook-form';
import { EmbedDialogProvider } from '@calcom/features/embed/lib/hooks/useEmbedDialogCtx';

// Create a mock implementation of the org branding hook
const mockOrgBranding = {
  brandColor: "#292929",
  darkBrandColor: "#fafafa",
  logo: "",
  name: "Test Organization",
  theme: null,
  hideBranding: false,
};

// Create a mock module
const MockOrgBrandingProvider = ({ children }) => {
  return <>{children}</>;
};

// Export the mocked hooks and components that other components might import
export const useOrgBranding = () => mockOrgBranding;
export const OrgBrandingProvider = MockOrgBrandingProvider;

// Mock SchedulingType enum
export enum SchedulingType {
  ROUND_ROBIN = "ROUND_ROBIN",
  COLLECTIVE = "COLLECTIVE",
  MANAGED = "MANAGED",
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  const mockForm = {
    id: "test-form-id",
    userId: "test-user-id",
    name: "Test Form",
    description: "Test Description",
    fields: [
      {
        id: "field1",
        type: "text",
        label: "Name",
        required: true,
        placeholder: "Enter your name",
      }
    ],
    settings: {
      emailOwnerOnSubmission: false,
      customUrl: "",
      redirectUrl: "",
      theme: "auto",
      disabled: false,
      duplicateFrom: null,
      sendUpdatesTo: [],
      sendToAll: false,
    },
    routes: [
      {
        id: "route1",
        name: "Default Route",
        description: "Default routing path",
        conditions: [],
        actions: [],
        isFallback: true,
      }
    ],
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    disabled: false,
    position: 0,
    teamId: null,
    responses: [],
    _count: {
      responses: 0,
      routes: 1,
      fields: 1,
    },
    routers: [],
    connectedForms: [],
    teamMembers: [],
    team: null,
  };

  const mockTrpcState = {
    queries: [],
    mutations: [],
    subscriptions: [],
    links: [],
    context: {
      user: {
        id: "test-user-id",
        name: "Test User",
        email: "test@example.com",
      },
    },
  };

  const methods = useForm({
    defaultValues: {
      ...mockForm,
      fields: mockForm.fields,
      routes: mockForm.routes,
    },
    mode: "onBlur",
  });

  const enrichedWithUserProfileForm = {
    ...mockForm,
    user: {
      id: "test-user-id",
      name: "Test User",
      email: "test@example.com",
    },
    team: null,
    nonOrgUsername: null,
    nonOrgTeamslug: null,
    userOrigin: null,
    teamOrigin: null,
  };

  return (
    <MockOrgBrandingProvider>
      <EmbedDialogProvider>
        <FormProvider {...methods}>
          <ImportedComponent
            trpcState={mockTrpcState}
            form={mockForm}
            enrichedWithUserProfileForm={enrichedWithUserProfileForm}
            appUrl={state.appUrl.value}
            hookForm={methods}
          />
        </FormProvider>
      </EmbedDialogProvider>
    </MockOrgBrandingProvider>
  );
}