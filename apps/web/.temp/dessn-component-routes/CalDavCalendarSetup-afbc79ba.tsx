import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/caldavcalendar/pages/setup/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://example.com/calendar",
      label: "Calendar URL",
    },
    username: {
      type: "string",
      value: "johndoe",
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
      url: state.url.value,
      username: state.username.value,
      password: state.password.value,
    },
  });

  return (
    <ImportedComponent />
  );
}