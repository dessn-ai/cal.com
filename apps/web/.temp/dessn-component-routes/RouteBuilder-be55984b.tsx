import React from 'react';
import { useParentState } from '../useIframeState';

// Define the SchedulingType enum
const SchedulingType = {
  ROUND_ROBIN: "ROUND_ROBIN",
  COLLECTIVE: "COLLECTIVE",
  MANAGED: "MANAGED"
} as const;

// Create a virtual module
const virtualModule = {
  get SchedulingType() {
    return SchedulingType;
  }
};

// Mock the module
if (typeof window !== 'undefined') {
  // Define the module path
  const modulePath = '/@fs/Users/nimcheema/src/cal.com/packages/prisma/client/index.js';
  
  // Create a proxy to handle dynamic imports
  const moduleProxy = new Proxy(virtualModule, {
    get(target, prop) {
      if (prop === 'SchedulingType') {
        return SchedulingType;
      }
      return undefined;
    }
  });

  // Add the mock to window
  // @ts-ignore
  window[modulePath] = moduleProxy;
  
  // Also add it to the more common paths that might be tried
  // @ts-ignore
  window['@calcom/prisma/client'] = moduleProxy;
}

// Import the component
const ImportedComponent = React.lazy(() => {
  return import('../../../../packages/app-store/routing-forms/pages/route-builder/[...appPages]')
    .catch(error => {
      console.error('Error loading component:', error);
      return {
        default: () => <div>Error loading component</div>
      };
    });
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: JSON.stringify({
        queries: [],
        mutations: [],
        subscriptions: [],
        links: []
      }),
      label: "TRPC State"
    },
    form: {
      type: "string",
      value: JSON.stringify({
        id: "test-form",
        name: "Test Form",
        description: "Test form description",
        userId: "user-1",
        teamId: null,
        disabled: false,
        fields: [],
        routes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        connectedForms: []
      }),
      label: "Form"
    },
    enrichedWithUserProfileForm: {
      type: "string",
      value: JSON.stringify({
        id: "test-form",
        name: "Test Form",
        description: "Test form description",
        userId: "user-1",
        teamId: null,
        disabled: false,
        fields: [],
        routes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        connectedForms: []
      }),
      label: "Enriched With User Profile Form"
    },
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL"
    }
  });

  React.useEffect(() => {
    // Ensure the mock is available after mount
    const modulePath = '/@fs/Users/nimcheema/src/cal.com/packages/prisma/client/index.js';
    if (typeof window !== 'undefined' && !window[modulePath]) {
      // @ts-ignore
      window[modulePath] = virtualModule;
    }
  }, []);

  return (
    <div className="route-builder-preview">
      <React.Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent
          trpcState={JSON.parse(state.trpcState.value)}
          form={JSON.parse(state.form.value)}
          enrichedWithUserProfileForm={JSON.parse(state.enrichedWithUserProfileForm.value)}
          appUrl={state.appUrl.value}
        />
      </React.Suspense>
    </div>
  );
}