import React from 'react';
import { useParentState } from '../useIframeState';
import { AboutOrganizationForm } from '../../../../packages/features/ee/organizations/components/AboutOrganizationForm';
import { FormProvider, useForm } from 'react-hook-form';

// Create a HOC to inject the required dependencies
const withInjectedDependencies = (WrappedComponent, orgId) => {
  return function WithInjectedDependencies(props) {
    // Create stable references to the mocked functions
    const mockRouter = React.useMemo(() => ({ push: () => {} }), []);
    const mockLocale = React.useMemo(() => ({ t: (key: string) => key }), []);
    const mockRouterQuery = React.useMemo(() => ({ id: orgId }), [orgId]);
    const mockTrpc = React.useMemo(
      () => ({
        viewer: {
          organizations: {
            update: {
              useMutation: () => ({
                mutate: () => {},
                isPending: false,
              }),
            },
          },
        },
      }),
      []
    );

    // Override the hooks before rendering the component
    const originalUseRouter = window.useRouter;
    const originalUseLocale = window.useLocale;
    const originalUseRouterQuery = window.useRouterQuery;
    const originalTrpc = window.trpc;

    React.useEffect(() => {
      window.useRouter = () => mockRouter;
      window.useLocale = () => mockLocale;
      window.useRouterQuery = () => mockRouterQuery;
      window.trpc = mockTrpc;

      return () => {
        window.useRouter = originalUseRouter;
        window.useLocale = originalUseLocale;
        window.useRouterQuery = originalUseRouterQuery;
        window.trpc = originalTrpc;
      };
    }, [mockRouter, mockLocale, mockRouterQuery, mockTrpc]);

    return <WrappedComponent {...props} />;
  };
};

export default function ComponentPreview() {
  const [state] = useParentState({
    orgId: {
      type: "string",
      value: "org123",
      label: "Organization ID",
    },
  });

  const formMethods = useForm({
    defaultValues: {
      logo: '',
      bio: '',
    }
  });

  // Create the enhanced component with injected dependencies
  const EnhancedAboutOrganizationForm = React.useMemo(
    () => withInjectedDependencies(AboutOrganizationForm, state.orgId.value),
    [state.orgId.value]
  );

  return (
    <FormProvider {...formMethods}>
      <EnhancedAboutOrganizationForm />
    </FormProvider>
  );
}

// Ensure these globals exist
if (typeof window !== 'undefined') {
  window.useRouter = window.useRouter || (() => ({}));
  window.useLocale = window.useLocale || (() => ({}));
  window.useRouterQuery = window.useRouterQuery || (() => ({}));
  window.trpc = window.trpc || {};
}