import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/exchange2016calendar/pages/setup/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "user@example.com",
      label: "Username",
    },
    password: {
      type: "string",
      value: "password123",
      label: "Password",
    },
    url: {
      type: "string",
      value: "https://example.com/Ews/Exchange.asmx",
      label: "Calendar URL",
    },
  });

  const form = useForm({
    defaultValues: {
      username: state.username.value,
      password: state.password.value,
      url: state.url.value,
    },
  });

  return (
    <ImportedComponent />
  );
}