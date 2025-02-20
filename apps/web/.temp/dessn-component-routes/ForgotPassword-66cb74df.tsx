import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/forgot-password/forgot-password-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    csrfToken: {
      type: "string",
      value: "sample-csrf-token",
      label: "CSRF Token",
    },
  });

  return (
    <ImportedComponent csrfToken={state.csrfToken.value} />
  );
}