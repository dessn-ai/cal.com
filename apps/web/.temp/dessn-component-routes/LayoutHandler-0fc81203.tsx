import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Lazy load the component to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../../../packages/app-store/routing-forms/pages/layout-handler/[...appPages]').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

// Initialize QueryClient with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock TRPC Provider component
const MockTRPCProvider = ({ children }) => {
  return children;
};

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  debug: false,
  resources: {},
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    exampleProp: {
      type: "string",
      value: "Example Value",
      label: "Example Prop",
    },
  });

  const methods = useForm();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <MockTRPCProvider>
            <FormProvider {...methods}>
              <ImportedComponent {...state} />
            </FormProvider>
          </MockTRPCProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </Suspense>
  );
}