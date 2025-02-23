import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/security/DisableUserImpersonation';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disableImpersonation: {
      type: "boolean",
      value: false,
      label: "Disable Impersonation",
    },
  });

  return (
    <ImportedComponent
      disableImpersonation={state.disableImpersonation.value}
    />
  );
}