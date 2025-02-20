import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/security/TwoFactorAuthSection';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    twoFactorEnabled: {
      type: "boolean",
      value: false,
      label: "Two Factor Enabled",
    },
  });

  return (
    <ImportedComponent
      twoFactorEnabled={state.twoFactorEnabled.value}
    />
  );
}