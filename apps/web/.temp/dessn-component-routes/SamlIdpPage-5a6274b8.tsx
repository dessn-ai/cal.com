import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the SAML IDP page with a client component since we can't directly render server components
function MockSamlIdpPage({ params, searchParams }) {
  return (
    <div className="mx-auto my-8 max-w-md">
      <h1 className="mb-4 text-2xl font-bold">SAML Identity Provider</h1>
      <div className="rounded-md border p-4">
        <p className="mb-2">Parameters:</p>
        <pre className="bg-gray-100 p-2">
          {JSON.stringify({ params, searchParams }, null, 2)}
        </pre>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          This is a preview of the SAML IdP page component.
          Server components cannot be rendered directly in the preview.
        </p>
      </div>
    </div>
  );
}

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

  return <MockSamlIdpPage params={params} searchParams={searchParams} />;
}