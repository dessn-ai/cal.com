import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified mock version of the route builder
const MockRouteBuilder = ({ form, trpcState, enrichedWithUserProfileForm, appUrl }) => {
  return (
    <div className="mock-route-builder p-4">
      <h2 className="text-xl font-bold mb-4">Route Builder Preview</h2>
      <div className="bg-gray-50 p-4 rounded-md">
        <div className="mb-4">
          <h3 className="font-medium">Form Data:</h3>
          <pre className="text-sm mt-2 bg-white p-2 rounded">
            {JSON.stringify(form, null, 2)}
          </pre>
        </div>
        <div className="mb-4">
          <h3 className="font-medium">TRPC State:</h3>
          <pre className="text-sm mt-2 bg-white p-2 rounded">
            {JSON.stringify(trpcState, null, 2)}
          </pre>
        </div>
        <div className="mb-4">
          <h3 className="font-medium">Enriched Form Data:</h3>
          <pre className="text-sm mt-2 bg-white p-2 rounded">
            {JSON.stringify(enrichedWithUserProfileForm, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="font-medium">App URL:</h3>
          <pre className="text-sm mt-2 bg-white p-2 rounded">{appUrl}</pre>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: "{}",
      label: "TRPC State"
    },
    form: {
      type: "string",
      value: "{}",
      label: "Form"
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: "{}",
      label: "Enriched With User Profile Form"
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL"
    }
  });

  return (
    <MockRouteBuilder
      trpcState={JSON.parse(state.trpcState.value)}
      form={JSON.parse(state.form.value)}
      enrichedWithUserProfileForm={JSON.parse(state.enrichedWithUserProfileForm.value)}
      appUrl={state.appUrl.value}
    />
  );
}