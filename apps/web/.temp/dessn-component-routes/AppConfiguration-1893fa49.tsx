import React from 'react';
import { useParentState } from '../useIframeState';
import { AppConfiguration } from '../../../../packages/app-store/_components/AppConfiguration';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "string",
      value: "vital",
      label: "App Type",
    },
    credentialIds: {
      type: "string",
      value: "1,2,3",
      label: "Credential IDs (comma-separated)",
    },
  });

  const credentialIds = state.credentialIds.value.split(',').map(Number);

  return (
    <AppConfiguration
      type={state.type.value}
      credentialIds={credentialIds}
    />
  );
}