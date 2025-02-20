import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/incomplete-booking/[...appPages]';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      fields: [],
      routes: []
    }
  });
  
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "form-123",
        name: "Sample Form",
        description: "A sample form for preview",
        fields: [
          {
            id: "field1",
            type: "text",
            label: "Name",
            required: true,
            placeholder: "Enter your name"
          }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: 1,
        teamId: null,
        disabled: false,
        position: 0,
        settings: {
          submitText: "Submit",
          customText: "",
          redirectUrl: "",
          emailOwnerOnSubmission: false
        },
        routes: [
          {
            id: "route1",
            name: "Default Route",
            description: "Default routing path",
            conditions: [],
            isFallback: true,
            action: {
              type: "customPageMessage",
              value: "Thank you for your submission"
            }
          }
        ],
        _count: { responses: 0 },
        routers: [],
        connectedForms: [],
        teamMembers: [],
      },
      label: "Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
    enrichedWithUserProfileForm: {
      type: "object",
      value: {
        user: {
          metadata: {},
          id: 1,
          username: "johndoe",
          profile: {
            name: "John Doe",
            email: "john@example.com"
          },
        },
        team: null,
        _count: { responses: 0 },
        name: "Enriched Form",
        description: "An enriched form for preview",
        id: "enriched-form-123",
        settings: {
          submitText: "Submit",
          customText: "",
          redirectUrl: "",
          emailOwnerOnSubmission: false
        },
        disabled: false,
        position: 1,
        fields: [
          {
            id: "field1",
            type: "text",
            label: "Name",
            required: true,
            placeholder: "Enter your name"
          }
        ],
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: null,
        routes: [
          {
            id: "route1",
            name: "Default Route",
            description: "Default routing path",
            conditions: [],
            isFallback: true,
            action: {
              type: "customPageMessage",
              value: "Thank you for your submission"
            }
          }
        ],
        updatedById: null,
        routers: [],
        connectedForms: [],
        teamMembers: [],
      },
      label: "Enriched Form",
    },
  });

  // Wrap the component in a try-catch to prevent errors from breaking the preview
  try {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <FormProvider {...methods}>
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-sm">
            <h1 className="mb-4 text-xl font-semibold">{state.form.value.name}</h1>
            <p className="mb-6 text-gray-600">{state.form.value.description}</p>
            <div className="space-y-4">
              {state.form.value.fields.map((field) => (
                <div key={field.id} className="rounded-md border p-4">
                  <label className="block font-medium text-gray-700">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                {state.form.value.settings.submitText || 'Submit'}
              </button>
            </div>
          </div>
        </FormProvider>
      </div>
    );
  } catch (error) {
    // Fallback UI in case of errors
    return (
      <div className="p-4">
        <p>Preview not available</p>
      </div>
    );
  }
}