import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/applecalendar/pages/setup/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "appleid@example.com",
      label: "Username",
    },
    password: {
      type: "string",
      value: "password123",
      label: "Password",
    },
  });

  const form = useForm({
    defaultValues: {
      username: state.username.value,
      password: state.password.value,
    },
  });

  return (
    <ImportedComponent />
  );
}