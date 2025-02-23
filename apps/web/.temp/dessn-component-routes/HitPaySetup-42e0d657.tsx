import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/hitpay/pages/setup/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isSandbox: {
      type: "boolean",
      value: false,
      label: "Is Sandbox",
    },
    sandboxApiKey: {
      type: "string",
      value: "",
      label: "Sandbox API Key",
    },
    sandboxSaltKey: {
      type: "string",
      value: "",
      label: "Sandbox Salt Key",
    },
    prodApiKey: {
      type: "string",
      value: "",
      label: "Production API Key",
    },
    prodSaltKey: {
      type: "string",
      value: "",
      label: "Production Salt Key",
    },
  });

  const props = {
    isSandbox: state.isSandbox.value,
    sandbox: {
      apiKey: state.sandboxApiKey.value,
      saltKey: state.sandboxSaltKey.value,
    },
    prod: {
      apiKey: state.prodApiKey.value,
      saltKey: state.prodSaltKey.value,
    },
  };

  return <ImportedComponent {...props} />;
}