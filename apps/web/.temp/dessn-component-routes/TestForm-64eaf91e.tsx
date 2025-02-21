import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';
import { TestForm } from '../../../../packages/app-store/routing-forms/components/SingleForm';

// Create necessary context providers
const OrgBrandingProvider = createContext(null);
OrgBrandingProvider.displayName = 'OrgBrandingProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Form",
        description: "This is a sample form",
        teamId: 1,
        routes: [
          {
            id: "default",
            isFallback: true,
            action: {
              type: "customPageMessage",
              value: "Thank you for submitting the form"
            }
          }
        ],
        fields: [
          {
            id: "1",
            name: "name",
            type: "text",
            label: "Name",
            required: true
          },
          {
            id: "2",
            name: "email",
            type: "email",
            label: "Email",
            required: true
          }
        ],
        settings: {
          emailOwnerOnSubmission: false,
          sendUpdatesTo: [],
          sendToAll: false
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { responses: 0 },
        team: { 
          slug: "team-slug", 
          name: "Team Name",
        },
        user: {
          id: 1,
          username: "testuser",
          email: "test@example.com",
          name: "Test User"
        },
        connectedForms: [],
        routers: [],
        teamMembers: []
      },
      label: "Form"
    },
    showAllData: {
      type: "boolean",
      value: true,
      label: "Show All Data"
    },
    renderFooter: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Render Footer"
    }
  });

  const methods = useForm({
    defaultValues: {
      id: state.form.value.id,
      name: state.form.value.name,
      description: state.form.value.description,
      fields: state.form.value.fields,
      settings: state.form.value.settings,
      routes: state.form.value.routes
    }
  });

  // Mock the org branding context
  const orgBrandingValue = {
    orgBrand: {
      id: 1,
      name: "Test Org",
      slug: "test-org",
      logoUrl: null,
      fullDomain: "test-org.cal.com",
      domainSuffix: "cal.com",
      role: "ADMIN",
      theme: null,
      brandColor: "#292929",
      darkBrandColor: "#fafafa",
      hideBranding: false
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <OrgBrandingProvider.Provider value={orgBrandingValue}>
        <FormProvider {...methods}>
          <TestForm
            form={state.form.value}
            showAllData={state.showAllData.value}
          />
        </FormProvider>
      </OrgBrandingProvider.Provider>
    </div>
  );
}