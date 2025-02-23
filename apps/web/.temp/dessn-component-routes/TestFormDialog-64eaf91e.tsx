import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        'form_name': 'Form Name',
        'description': 'Description',
        'team': 'Team',
        'status': 'Status',
        'active': 'Active',
        'disabled': 'Disabled',
        'test_form_preview': 'Test Form Preview'
      }
    }
  }
});

// Mock data
const mockUserData = {
  id: "test-user-id",
  name: "Test User",
  email: "test@example.com",
  username: "testuser",
  role: "ADMIN",
  teams: [
    {
      id: 1,
      name: "Sample Team",
      slug: "sample-team",
      role: "OWNER"
    }
  ],
  organization: null,
  organizationId: null,
  avatar: "",
  timeZone: "UTC",
  weekStart: "Monday",
  hideBranding: false,
  theme: null,
  brandColor: "#292929",
  darkBrandColor: "#fafafa",
  metadata: {},
  allowDynamicBooking: true,
  timeFormat: 12,
};

// Mock form data
const mockFormData = {
  id: "123",
  name: "Sample Form",
  description: "This is a sample form",
  userId: mockUserData.id,
  teamId: 1,
  routes: [],
  fields: [],
  settings: {
    sendUpdatesTo: [],
    sendToAll: false,
    emailOwnerOnSubmission: true,
  },
  _count: {
    responses: 0,
  },
  team: {
    id: 1,
    name: "Sample Team",
    slug: "sample-team",
    members: [],
  },
  teamMembers: [],
  user: mockUserData,
  position: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  disabled: false,
  routers: [],
  connectedForms: [],
};

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Prefetch all required queries
queryClient.setQueryData(['viewer.me'], mockUserData);

const TestFormPreview = () => {
  const { t } = i18next;
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: mockFormData,
      label: "Form",
    },
    isTestPreviewOpen: {
      type: "boolean",
      value: true,
      label: "Is Test Preview Open",
    },
  });

  const methods = useForm({
    defaultValues: {
      form: state.form.value,
    }
  });

  return (
    <div className="p-6">
      <h2 className="font-medium text-xl mb-4">{t('test_form_preview')}</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('form_name')}</label>
          <div className="mt-1">{state.form.value.name}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('description')}</label>
          <div className="mt-1">{state.form.value.description}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('team')}</label>
          <div className="mt-1">{state.form.value.team.name}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('status')}</label>
          <div className="mt-1">{state.form.value.disabled ? t('disabled') : t('active')}</div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={{ user: mockUserData, expires: "2024-12-31" }}>
          <FormProvider {...useForm()}>
            <TestFormPreview />
          </FormProvider>
        </SessionProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}