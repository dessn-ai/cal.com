import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/EnableTwoFactorModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
  });

  const handleOpenChange = () => {
    setState('open', !state.open.value);
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleEnable = () => {
    console.log("Enable clicked");
  };

  return (
    <ImportedComponent
      open={state.open.value}
      onOpenChange={handleOpenChange}
      onCancel={handleCancel}
      onEnable={handleEnable}
    />
  );
}