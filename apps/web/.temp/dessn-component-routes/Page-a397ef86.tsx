import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/forgot-password/[id]/forgot-password-single-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isRequestExpired: {
      type: "boolean",
      value: false,
      label: "Is Request Expired",
    },
    requestId: {
      type: "string",
      value: "sample-request-id",
      label: "Request ID",
    },
    csrfToken: {
      type: "string",
      value: "sample-csrf-token",
      label: "CSRF Token",
    },
  });

  const formMethods = useForm();

  return (
    <ImportedComponent
      isRequestExpired={state.isRequestExpired.value}
      requestId={state.requestId.value}
      csrfToken={state.csrfToken.value}
    />
  );
}