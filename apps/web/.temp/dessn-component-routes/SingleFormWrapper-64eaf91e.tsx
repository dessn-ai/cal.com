import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Create a simplified version of the form component
const SimplifiedFormComponent = ({ form, appUrl }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{form.name}</h1>
        <p className="text-gray-600">{form.description}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {form.routes && form.routes.map((route, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-medium">{route.name}</h3>
              <p className="text-sm text-gray-500">{route.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const methods = useForm();
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
    <FormProvider {...methods}>
      <SimplifiedFormComponent
        form={state.form.value}
        appUrl={state.appUrl.value}
      />
    </FormProvider>
  );
}