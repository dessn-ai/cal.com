import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/giphy/components/SelectGifInput';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValue: {
      type: "string",
      value: "https://media.giphy.com/media/example/giphy.gif",
      label: "Default GIF URL",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const handleChange = (url: string) => {
    console.log("Selected GIF URL:", url);
  };

  return (
    <ImportedComponent
      defaultValue={state.defaultValue.value}
      onChange={handleChange}
      disabled={state.disabled.value}
    />
  );
}