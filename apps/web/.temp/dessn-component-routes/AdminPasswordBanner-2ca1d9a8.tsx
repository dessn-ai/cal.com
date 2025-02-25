import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/users/components/AdminPasswordBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    role: {
      type: "dropdown",
      value: "INACTIVE_ADMIN",
      options: ["INACTIVE_ADMIN", "ADMIN", "USER"],
      label: "User Role",
    },
    username: {
      type: "string",
      value: "JohnDoe",
      label: "Username",
    },
  });

  const mockData = {
    user: {
      role: state.role.value,
      username: state.username.value,
    },
  };

  return <ImportedComponent data={mockData as any} />;
}