import React from 'react';
import { useParentState } from '../useIframeState';
import SamlIdpClient from '../../modules/auth/saml-idp/saml-idp-view';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: "{}",
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: '{"code": "example_code"}',
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">SAML IdP Login Preview</h2>
        <p className="text-gray-600">Code: {searchParams.code}</p>
        <p className="text-sm text-gray-500 mt-2">
          Note: Actual SAML authentication is disabled in preview mode
        </p>
      </div>
    </div>
  );
}