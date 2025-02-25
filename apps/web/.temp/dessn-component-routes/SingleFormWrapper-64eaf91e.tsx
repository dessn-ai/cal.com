import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Mock the useOrgBranding hook directly
const useOrgBranding = () => ({
  orgBranding: {
    fullDomain: "example.com",
    slug: "example",
    theme: null,
    hideBranding: false,
  },
  isLoading: false,
});

// Mock other required hooks
const useEmbedDialog = () => ({
  isEmbedDialogOpen: false,
  setIsEmbedDialogOpen: () => {},
});

const useFormActions = () => ({
  appUrl: "/routing-forms",
  setNewFormDialogState: () => {},
  newFormDialogState: null,
});

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      id: "123",
      name: "Sample Form",
      description: "A sample routing form",
      teamId: 1,
      routes: [],
      _count: { responses: 0 },
      team: { slug: "team-slug", name: "Team Name" },
      teamMembers: [],
      settings: { 
        sendUpdatesTo: [], 
        sendToAll: false,
        emailOwnerOnSubmission: false 
      },
      routers: [],
      connectedForms: [],
      response: {},
      formState: {
        errors: {}
      }
    }
  });

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

  // Override the module import
  if (import.meta.env.DEV) {
    // @ts-ignore
    window.__calcom_features_ee_organizations_context_provider = {
      useOrgBranding,
    };
    // @ts-ignore
    window.__calcom_features_embed_lib_hooks_useEmbedDialogCtx = {
      useEmbedDialog,
    };
    // @ts-ignore
    window.__calcom_app_store_routing_forms_components_FormActions = {
      useFormActions,
    };
  }

  return (
    <FormProvider {...methods}>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">{state.form.value.name}</h1>
        <p className="text-gray-600 mb-6">{state.form.value.description}</p>
        <div className="border p-4 rounded">
          <p>Form content would go here</p>
        </div>
      </div>
    </FormProvider>
  );
}