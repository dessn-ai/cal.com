import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/AdminOrgEditPage';
import { useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock I18nProvider component
const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock Dialog component and its context
const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Create QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Example Organization",
      label: "Organization Name",
    },
    slug: {
      type: "string",
      value: "example-org",
      label: "Organization Slug",
    },
    orgAutoAcceptEmail: {
      type: "string",
      value: "example.com",
      label: "Auto-accept Email Domain",
    },
  });

  const form = useForm({
    defaultValues: {
      name: state.name.value,
      slug: state.slug.value,
      organizationSettings: {
        orgAutoAcceptEmail: state.orgAutoAcceptEmail.value,
      },
    },
  });

  const org = {
    id: "preview-org-id",
    name: state.name.value,
    slug: state.slug.value,
    organizationSettings: {
      orgAutoAcceptEmail: state.orgAutoAcceptEmail.value,
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <DialogProvider>
          <ImportedComponent org={org} />
        </DialogProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}