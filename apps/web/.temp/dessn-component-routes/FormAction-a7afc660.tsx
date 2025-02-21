import React from 'react';
import { useParentState } from '../useIframeState';
import { FormAction } from '../../../../packages/app-store/routing-forms/components/FormActions';

import { EmbedDialogProvider } from '@calcom/features/embed/lib/hooks/useEmbedDialogCtx';
import { FormActionsProvider } from '../../../../packages/app-store/routing-forms/components/FormActions';

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
  );
}