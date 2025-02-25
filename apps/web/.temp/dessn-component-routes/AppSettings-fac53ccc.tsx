import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/templates/general-app-settings/components/AppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    input: {
      type: "string",
      value: "",
      label: "Input Value",
    },
  });

  return (
    <ImportedComponent />
  );
}