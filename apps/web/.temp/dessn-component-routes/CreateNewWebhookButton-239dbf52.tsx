import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/components/CreateNewWebhookButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin",
    },
  });

  return <ImportedComponent isAdmin={state.isAdmin.value} />;
}