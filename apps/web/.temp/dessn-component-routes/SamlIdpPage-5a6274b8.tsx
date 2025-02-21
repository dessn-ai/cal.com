import React from 'react';
import { useParentState } from '../useIframeState';

// Create a client-side mock of the SamlIdpClient component
const MockSamlIdpClient = ({ code }: { code: string }) => {
  return (
    <div className="mx-auto my-8 max-w-md">
      <div className="rounded-md border border-gray-200 p-8">
        <h2 className="mb-4 text-center text-2xl font-semibold">SAML IdP Preview</h2>
        <div className="mb-4">
          <p className="text-gray-600">Code: {code}</p>
        </div>
        <div className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-sm text-gray-600">This is a preview of the SAML IdP page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  return <MockSamlIdpClient code={searchParams.code} />;
}