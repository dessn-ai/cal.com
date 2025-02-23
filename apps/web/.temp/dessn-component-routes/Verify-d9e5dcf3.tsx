import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/verify-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    EMAIL_FROM: {
      type: "string",
      value: "noreply@example.com",
      label: "Email From",
    },
  });

  return (
    <ImportedComponent
      EMAIL_FROM={state.EMAIL_FROM.value}
    />
  );
}