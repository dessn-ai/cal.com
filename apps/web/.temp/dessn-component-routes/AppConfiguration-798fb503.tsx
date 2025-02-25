import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/vital/components/AppConfiguration';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    credentialIds: {
      type: "string",
      value: "1,2,3",
      label: "Credential IDs",
    },
  });

  const credentialIds = state.credentialIds.value.split(',').map(Number);

  return <ImportedComponent credentialIds={credentialIds} />;
}