import React from 'react';
import { useParentState } from '../useIframeState';
import { FormAction } from '../../../../packages/app-store/routing-forms/components/FormActions';
import { FormActionsProvider } from '../../../../packages/app-store/routing-forms/components/FormActions';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

// Create mock EmbedDialogProvider
const EmbedDialogContext = React.createContext({
  isEmbedDialogOpen: false,
  setIsEmbedDialogOpen: () => {},
  embedType: null,
  setEmbedType: () => {},
});

const EmbedDialogProvider = ({ children }) => {
  return (
    <EmbedDialogContext.Provider 
      value={{
        isEmbedDialogOpen: false,
        setIsEmbedDialogOpen: () => {},
        embedType: null,
        setEmbedType: () => {},
      }}
    >
      {children}
    </EmbedDialogContext.Provider>
  );
};

// Mock organization branding context
const mockOrgBranding = {
  orgBranding: {
    theme: null,
    logo: null,
    brandColor: null,
    darkBrandColor: null,
  },
  isLoading: false,
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "/app/routing-forms",
      label: "App URL",
    },
    routingForm: {
      type: "dropdown",
      value: "null",
      options: ["null", "exampleForm"],
      label: "Routing Form",
    },
    action: {
      type: "dropdown",
      value: "preview",
      options: ["preview", "edit", "copyLink", "toggle", "_delete", "embed", "duplicate", "download", "copyRedirectUrl", "create"],
      label: "Action",
    },
  });

  const routingForm = state.routingForm.value === "exampleForm" 
    ? { id: "example-id", name: "Example Form", disabled: false }
    : null;

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <EmbedDialogProvider>
        <FormActionsProvider
          appUrl={state.appUrl.value}
          newFormDialogState={null}
          setNewFormDialogState={() => {}}>
          <FormAction
            routingForm={routingForm}
            action={state.action.value as any}
          >
            {state.action.value}
          </FormAction>
        </FormActionsProvider>
      </EmbedDialogProvider>
    </OrgBrandingProvider>
  );
}