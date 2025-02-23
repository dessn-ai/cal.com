import React from 'react';
import { useParentState } from '../useIframeState';
import { PersonInfo } from '../../../../packages/emails/src/components/WhoInfo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "John Doe",
      label: "Name"
    },
    email: {
      type: "string",
      value: "john.doe@example.com",
      label: "Email"
    },
    role: {
      type: "string",
      value: "Developer",
      label: "Role"
    },
    phoneNumber: {
      type: "string",
      value: "+1 (555) 123-4567",
      label: "Phone Number"
    }
  });

  return (
    <PersonInfo
      name={state.name.value}
      email={state.email.value}
      role={state.role.value}
      phoneNumber={state.phoneNumber.value}
    />
  );
}