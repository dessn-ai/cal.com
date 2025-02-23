import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/error';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    errorMessage: {
      type: "string",
      value: "An unexpected error occurred",
      label: "Error Message",
    },
    errorName: {
      type: "string",
      value: "Internal Server Error",
      label: "Error Name",
    },
    statusCode: {
      type: "number",
      value: 500,
      label: "Status Code",
    },
  });

  const error = new Error(state.errorMessage.value);
  error.name = state.errorName.value;
  (error as any).statusCode = state.statusCode.value;

  return <ImportedComponent error={error} />;
}