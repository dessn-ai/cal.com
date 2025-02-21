import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/platform/authorize-view';

import { useRouter } from 'next/navigation';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    clientName: {
      type: "string",
      value: "Acme.com",
      label: "Client Name",
    },
    clientLogo: {
      type: "string",
      value: "",
      label: "Client Logo URL",
    },
    clientPermissions: {
      type: "number",
      value: 7,
      label: "Client Permissions",
    },
  });

  const mockRouter = {
    back: () => console.log("Router back called"),
  };

  return (
    <ImportedComponent />
  );
}