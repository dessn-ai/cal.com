import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/exchangecalendar/pages/setup/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://example.com/Ews/Exchange.asmx",
      label: "URL",
    },
    username: {
      type: "string",
      value: "john.doe@example.com",
      label: "Username",
    },
    password: {
      type: "string",
      value: "password123",
      label: "Password",
    },
    authenticationMethod: {
      type: "number",
      value: 1,
      label: "Authentication Method",
    },
    exchangeVersion: {
      type: "number",
      value: 7,
      label: "Exchange Version",
    },
    useCompression: {
      type: "boolean",
      value: false,
      label: "Use Compression",
    },
  });

  const form = useForm({
    defaultValues: {
      url: state.url.value,
      username: state.username.value,
      password: state.password.value,
      authenticationMethod: state.authenticationMethod.value,
      exchangeVersion: state.exchangeVersion.value,
      useCompression: state.useCompression.value,
    },
  });

  return (
    <ImportedComponent />
  );
}