import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/SecondaryEmailConfirmModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    email: {
      type: "string",
      value: "user@example.com",
      label: "Email",
    },
  });

  return (
    <ImportedComponent
      email={state.email.value}
      onCancel={() => console.log("Cancel clicked")}
    />
  );
}