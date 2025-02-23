import React from 'react';
import { useParentState } from '../useIframeState';
import { ErrorPage } from '../../components/error/error-page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    statusCode: {
      type: "number",
      value: 500,
      label: "Status Code",
    },
    message: {
      type: "string",
      value: "An unexpected error occurred",
      label: "Error Message",
    },
    displayDebug: {
      type: "boolean",
      value: false,
      label: "Display Debug",
    },
  });

  const error = new Error(state.message.value);

  return (
    <ErrorPage 
      statusCode={state.statusCode.value}
      error={error}
      message={state.message.value}
      displayDebug={state.displayDebug.value}
    />
  );
}