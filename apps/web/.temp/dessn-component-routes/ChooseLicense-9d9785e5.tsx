import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/setup/ChooseLicense';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "dropdown",
      value: "FREE",
      options: ["FREE", "EE"],
      label: "License Type",
    },
  });

  const handleChange = (value: string) => {
    setState('value', value);
  };

  const handleSubmit = (value: string) => {
    console.log("Submitted value:", value);
  };

  return (
    <ImportedComponent
      value={state.value.value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}