import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/dropdown/Dropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    externalPropType: {
      type: "dropdown",
      value: "xs",
      options: ["xs", "sm", "md", "lg", "xl"],
      label: "External Prop Type",
    },
  });

  return (
    <ImportedComponent
      className={state.className.value}
      isLoading={state.isLoading.value}
      externalProp={{ type: state.externalPropType.value }}
    />
  );
}