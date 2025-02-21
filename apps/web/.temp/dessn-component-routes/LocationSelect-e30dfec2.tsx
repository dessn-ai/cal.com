import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/form/components/LocationSelect';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    options: {
      type: "string",
      value: JSON.stringify([
        { label: "Google Meet", value: "googlemeet", icon: "https://example.com/google-meet-icon.png" },
        { label: "Zoom", value: "zoom", icon: "https://example.com/zoom-icon.png" },
        { label: "In Person", value: "inPerson" },
      ]),
      label: "Options",
    },
    placeholder: {
      type: "string",
      value: "Select a location",
      label: "Placeholder",
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Is Disabled",
    },
  });

  const options = JSON.parse(state.options.value);

  return (
    <ImportedComponent
      options={options}
      placeholder={state.placeholder.value}
      isDisabled={state.isDisabled.value}
      onChange={(option) => console.log("Selected option:", option)}
    />
  );
}