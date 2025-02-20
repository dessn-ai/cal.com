import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/color-picker/colorpicker';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValue: {
      type: "string",
      value: "#000000",
      label: "Default Color",
    },
    onChange: {
      type: "string",
      value: "(color) => console.log('Color changed:', color)",
      label: "On Change Function",
    },
    popoverAlign: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Popover Alignment",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional Class Names",
    },
    resetDefaultValue: {
      type: "string",
      value: "#FFFFFF",
      label: "Reset Default Value",
    },
  });

  const handleColorChange = (color: string) => {
    console.log('Color changed:', color);
  };

  return (
    <ImportedComponent
      defaultValue={state.defaultValue.value}
      onChange={handleColorChange}
      popoverAlign={state.popoverAlign.value as React.ComponentProps<typeof ImportedComponent>['popoverAlign']}
      className={state.className.value}
      resetDefaultValue={state.resetDefaultValue.value}
    />
  );
}