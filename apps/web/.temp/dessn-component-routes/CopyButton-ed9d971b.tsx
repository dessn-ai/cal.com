import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/500/copy-button';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    error: {
      type: "string",
      value: "An error occurred. Please try again.",
      label: "Error Message",
    },
  });

  return (
    <ImportedComponent error={state.error.value} />
  );
}