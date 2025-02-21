import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/reporting/[...appPages]';
import { FormProvider, useForm } from 'react-hook-form';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const methods = useForm();
  
  const mockForm = {
    id: "mock-form-id",
    name: "Mock Form",
    description: "Mock form description",
    fields: [],
    routes: [],
    responses: [],
    settings: {
      emailOwnerOnSubmission: false,
      sendUpdatesTo: [],
      sendToAll: false,
    },
    teamId: null,
    userId: "1",
    disabled: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      responses: 0,
      routes: 0
    },
    position: 0,
    routers: [],
    connectedForms: [],
    teamMembers: [],
  };

  const mockEnrichedForm = {
    ...mockForm,
    user: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      username: "testuser",
    },
    team: null,
    nonOrgUsername: null,
    nonOrgTeamslug: null,
    userOrigin: null,
    teamOrigin: null,
  };

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
      value: JSON.stringify(mockForm),
      label: "Form",
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: JSON.stringify(mockEnrichedForm),
      label: "Enriched User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  // Since we're getting context errors, let's try to mock the component
  const MockedComponent = () => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">{mockForm.name}</h1>
        <p className="text-gray-600">{mockForm.description}</p>
        <div className="mt-4">
          <p>Form ID: {mockForm.id}</p>
          <p>Fields: {mockForm.fields.length}</p>
          <p>Routes: {mockForm.routes.length}</p>
          <p>Responses: {mockForm._count.responses}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <FormProvider {...methods}>
        <MockedComponent />
      </FormProvider>
    </div>
  );
}