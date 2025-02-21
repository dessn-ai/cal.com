import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/admin/oauth-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    clientId: {
      type: "string",
      value: "",
      label: "Client ID",
    },
    clientSecret: {
      type: "string",
      value: "",
      label: "Client Secret",
    },
    logo: {
      type: "string",
      value: "",
      label: "Logo URL",
    },
  });

  const form = useForm<{ name: string; redirectUri: string; logo: string }>();

  return (
    <ImportedComponent />
  );
}