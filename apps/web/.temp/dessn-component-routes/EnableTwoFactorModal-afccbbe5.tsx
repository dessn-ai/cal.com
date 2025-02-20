import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/security/EnableTwoFactorModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onCancel: {
      type: "boolean",
      value: false,
      label: "Cancel Triggered",
    },
    onEnable: {
      type: "boolean",
      value: false,
      label: "Enable Triggered",
    },
  });

  const handleCancel = () => {
    setState("onCancel", true);
    setTimeout(() => setState("onCancel", false), 1000);
  };

  const handleEnable = () => {
    setState("onEnable", true);
    setTimeout(() => setState("onEnable", false), 1000);
  };

  return (
    <ImportedComponent
      onCancel={handleCancel}
      onEnable={handleEnable}
    />
  );
}