import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/security/TwoFactorModalHeader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Enable Two-Factor Authentication",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Enhance your account security by enabling two-factor authentication.",
      label: "Description",
    },
  });

  return (
    <ImportedComponent
      title={state.title.value}
      description={state.description.value}
    />
  );
}