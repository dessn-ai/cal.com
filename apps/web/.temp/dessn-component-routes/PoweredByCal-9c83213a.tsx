import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/components/PoweredBy';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    logoOnly: {
      type: "boolean",
      value: false,
      label: "Logo Only",
    },
    hasValidLicense: {
      type: "dropdown",
      value: "true",
      options: ["true", "false", "null"],
      label: "Has Valid License",
    },
  });

  const hasValidLicense = state.hasValidLicense.value === "true" 
    ? true 
    : state.hasValidLicense.value === "false" 
      ? false 
      : null;

  return (
    <ImportedComponent 
      logoOnly={state.logoOnly.value}
      hasValidLicense={hasValidLicense}
    />
  );
}