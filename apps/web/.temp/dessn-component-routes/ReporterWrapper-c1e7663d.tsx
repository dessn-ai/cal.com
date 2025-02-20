import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Mock components
const MockSingleForm = ({ form, enrichedWithUserProfileForm, trpcState, appUrl }) => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{form.name}</h1>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Form Responses ({form._count.responses})</h2>
        {form.responses.map((response) => (
          <div key={response.id} className="border p-3 mb-2 rounded">
            <pre>{JSON.stringify(response.response, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const mockResponses = [
    {
      id: "response1",
      formId: "form-id",
      response: { field1: "Sample Response 1" },
      createdAt: new Date().toISOString()
    },
    {
      id: "response2",
      formId: "form-id",
      response: { field1: "Sample Response 2" },
      createdAt: new Date().toISOString()
    }
  ];

  const baseFormData = {
    team: { slug: "team-slug", name: "Team Name" },
    _count: { responses: 2 },
    name: "Form Name",
    description: "Form Description",
    id: "form-id",
    settings: {
      responseData: {
        columns: ["field1"],
        enabled: true
      }
    },
    disabled: false,
    position: 1,
    fields: [
      {
        id: "field1",
        type: "text",
        label: "Sample Field",
        required: false,
        placeholder: "Enter text"
      }
    ],
    userId: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    teamId: 1,
    routes: [
      {
        id: "route1",
        name: "Default Route",
        description: "Default routing path",
        queryValue: { field1: "Sample Response" },
        action: { type: "message", value: "Thank you for your submission" }
      }
    ],
    responses: mockResponses,
    updatedById: 1,
    routers: [],
    connectedForms: [],
    teamMembers: [
      {
        id: 1,
        name: "Team Member 1",
        email: "member1@example.com",
        avatarUrl: null,
        defaultScheduleId: 1
      }
    ]
  };

  const methods = useForm({
    defaultValues: {
      ...baseFormData,
      responses: mockResponses
    }
  });

  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: JSON.stringify({
        json: {
          queries: {
            "viewer.forms.getFormResponses": {
              state: "success",
              data: {
                responses: mockResponses,
                totalResponses: 2
              }
            }
          }
        },
        mutations: {},
        subscriptions: {}
      }),
      label: "TRPC State",
    },
    form: {
      type: "string",
      value: JSON.stringify(baseFormData),
      label: "Form",
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: JSON.stringify({
        ...baseFormData,
        user: {
          metadata: {},
          id: 1,
          theme: "light",
          username: "user123",
          brandColor: "#000000",
          darkBrandColor: "#FFFFFF",
          movedToProfileId: null,
          organization: { slug: "org-slug" },
          nonProfileUsername: null,
          profile: {}
        }
      }),
      label: "Enriched With User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  const parsedForm = JSON.parse(state.form.value);
  const parsedEnrichedForm = JSON.parse(state.enrichedWithUserProfileForm.value);

  return (
    <FormProvider {...methods}>
      <MockSingleForm
        trpcState={JSON.parse(state.trpcState.value)}
        form={parsedForm}
        enrichedWithUserProfileForm={parsedEnrichedForm}
        appUrl={state.appUrl.value}
      />
    </FormProvider>
  );
}