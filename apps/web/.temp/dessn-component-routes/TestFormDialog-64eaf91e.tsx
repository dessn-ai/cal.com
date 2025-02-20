import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/SingleForm';
import { FormProvider, useForm } from 'react-hook-form';

// Create context with default branding data
const OrgBrandingContext = React.createContext({
  orgBranding: {
    brandColor: "#292929",
    darkBrandColor: "#fafafa",
    theme: null,
    hydrated: true,
  }
});

// Export the hook that components will use
export const useOrgBranding = () => {
  return React.useContext(OrgBrandingContext);
};

// Create the provider component
const OrgBrandingProvider = ({ children }) => {
  return (
    <OrgBrandingContext.Provider
      value={{
        orgBranding: {
          brandColor: "#292929",
          darkBrandColor: "#fafafa",
          theme: null,
          hydrated: true,
        }
      }}
    >
      {children}
    </OrgBrandingContext.Provider>
  );
};

// Make the mock available globally
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__mocks__ = window.__mocks__ || {};
  // @ts-ignore
  window.__mocks__['@calcom/features/ee/organizations/context/provider'] = {
    useOrgBranding,
    OrgBrandingProvider
  };
}

export default function ComponentPreview() {
  const formData = {
    id: "123",
    name: "Sample Form",
    description: "This is a sample form",
    teamId: 1,
    routes: [],
    fields: [],
    settings: {
      sendUpdatesTo: [],
      sendToAll: false,
    },
    _count: {
      responses: 0,
    },
    team: {
      name: "Sample Team",
      slug: "sample-team",
    },
    teamMembers: [],
    routers: [],
    connectedForms: [],
    position: 0,
    disabled: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const methods = useForm({
    defaultValues: formData
  });

  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: formData,
      label: "Form",
    },
    isTestPreviewOpen: {
      type: "boolean",
      value: true,
      label: "Is Test Preview Open",
    },
  });

  const mockPage = ({ form, hookForm }) => {
    return null;
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OrgBrandingProvider>
        <FormProvider {...methods}>
          <ImportedComponent
            form={state.form.value}
            isTestPreviewOpen={state.isTestPreviewOpen.value}
            setIsTestPreviewOpen={(value) => setState("isTestPreviewOpen", value)}
            appUrl="/routing-forms"
            Page={mockPage}
            enrichedWithUserProfileForm={{
              ...state.form.value,
              user: {
                id: 1,
                name: "Test User",
                email: "test@example.com",
                username: "testuser",
              },
              team: state.form.value.team,
              nonOrgUsername: null,
              nonOrgTeamslug: null,
              userOrigin: null,
              teamOrigin: null,
            }}
          />
        </FormProvider>
      </OrgBrandingProvider>
    </React.Suspense>
  );
}