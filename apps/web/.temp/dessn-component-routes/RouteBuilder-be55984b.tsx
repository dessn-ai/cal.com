import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified version of the route builder
const SimplifiedRouteBuilder = ({ form, appUrl }) => {
  return (
    <div className="bg-default border-subtle flex flex-col-reverse rounded-md border p-8 md:flex-row">
      <div className="w-full">
        <h2 className="text-emphasis mb-4 text-lg font-medium">Route Builder Preview</h2>
        <p className="text-default mb-4">
          This is a simplified preview of the route builder. The actual component requires Prisma and other dependencies
          that are not available in the preview environment.
        </p>
        <div className="bg-muted rounded-md p-4">
          <pre className="text-sm">
            {JSON.stringify({ form, appUrl }, null, 2)}
          </pre>
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
      label: "TRPC State",
    },
    form: {
      type: "string",
      value: JSON.stringify({
        id: "test-form",
        name: "Test Form",
        description: "Test Description",
        userId: "test-user",
        teamId: null,
        disabled: false,
        routes: [],
        fields: [],
        settings: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
      label: "Form",
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: "{}",
      label: "Enriched With User Profile Form",
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  return (
    <SimplifiedRouteBuilder
      form={JSON.parse(state.form.value)}
      appUrl={state.appUrl.value}
    />
  );
}