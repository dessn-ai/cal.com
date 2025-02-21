import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/500/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    error: {
      type: "string",
      value: "Example error message",
      label: "Error Message",
    },
  });

  const searchParams = {
    error: state.error.value,
  };

  return <ImportedComponent searchParams={searchParams} />;
}